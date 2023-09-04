import express from 'express';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/academicSemesters",
    routes: AcademicSemeterRoutes
  },
  {
    path: "/academicFaculties",
    routes: academicFacultyRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
