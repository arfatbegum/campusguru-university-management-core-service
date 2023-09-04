import express from 'express';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { StudentRoutes } from '../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/academicSemesters",
    routes: AcademicSemeterRoutes
  },
  {
    path: "/academicFaculties",
    routes: AcademicFacultyRoutes
  },
  {
    path: "/academicDepartment",
    routes: AcademicDepartmentRoutes
  },
  {
    path: "/students",
    routes: StudentRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
