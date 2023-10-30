import { Server } from 'http';
import app from './app';
import config from './config';
import { RedisClient } from './shared/redis';
import subscribeToEvents from './app/events';


async function bootstrap() {
  await RedisClient.connect().then(() => {
    subscribeToEvents()
  });
  const server: Server = app.listen(config.port, () => {
    console.info(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {

    if (server) {
      server.close(() => {
        console.info('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();