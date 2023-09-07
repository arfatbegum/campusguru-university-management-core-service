import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validations';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedule);
router.get('/:id', OfferedCourseClassScheduleController.getOfferedCourseClassSchedule);

router.post(
    '/',
    validateRequest(OfferedCourseClassScheduleValidation.create),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    OfferedCourseClassScheduleController.createOfferedCourseClassSchedule
);

router.patch(
    '/:id',
    validateRequest(OfferedCourseClassScheduleValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    OfferedCourseClassScheduleController.updateOfferedCourseClassSchedule
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    OfferedCourseClassScheduleController.deleteOfferedCourseClassSchedule
);



export const OfferedCourseClassScheduleRoutes = router;