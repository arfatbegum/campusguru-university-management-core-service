import express from 'express';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/academicSemesters",
    routes: AcademicSemeterRoutes
  },
  {
    path: "/academicFaculties",
    routes: academicFacultyRoutes
  },
  {
    path: "/academicDepartment",
    routes: AcademicDepartmentRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
