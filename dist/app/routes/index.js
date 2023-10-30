"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicDepartment_routes_1 = require("../modules/academicDepartment/academicDepartment.routes");
const academicFaculty_routes_1 = require("../modules/academicFaculty/academicFaculty.routes");
const academicSemester_routes_1 = require("../modules/academicSemester/academicSemester.routes");
const building_routes_1 = require("../modules/building/building.routes");
const course_routes_1 = require("../modules/course/course.routes");
const faculty_routes_1 = require("../modules/faculty/faculty.routes");
const offeredCourse_routes_1 = require("../modules/offeredCourse/offeredCourse.routes");
const offeredCourseClassSchedule_routes_1 = require("../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes");
const offeredCourseSection_routes_1 = require("../modules/offeredCourseSection/offeredCourseSection.routes");
const room_routes_1 = require("../modules/room/room.routes");
const semesterRegistration_routes_1 = require("../modules/semesterRegistration/semesterRegistration.routes");
const student_routes_1 = require("../modules/student/student.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/academicSemesters',
        routes: academicSemester_routes_1.AcademicSemeterRoutes,
    },
    {
        path: '/academicFaculties',
        routes: academicFaculty_routes_1.AcademicFacultyRoutes,
    },
    {
        path: '/academicDepartment',
        routes: academicDepartment_routes_1.AcademicDepartmentRoutes,
    },
    {
        path: '/students',
        routes: student_routes_1.StudentRoutes,
    },
    {
        path: '/faculties',
        routes: faculty_routes_1.FacultyRoutes,
    },
    {
        path: '/building',
        routes: building_routes_1.BuildingRoutes,
    },
    {
        path: '/room',
        routes: room_routes_1.RoomRoutes,
    },
    {
        path: '/courses',
        routes: course_routes_1.CourseRoutes,
    },
    {
        path: '/semester-registrations',
        routes: semesterRegistration_routes_1.SemesterRegistrationRoutes,
    },
    {
        path: '/offered-courses',
        routes: offeredCourse_routes_1.OfferedCourseRoutes,
    },
    {
        path: '/offered-course-sections',
        routes: offeredCourseSection_routes_1.OfferedCourseSectionRoutes,
    },
    {
        path: '/offered-course-class-schedules',
        routes: offeredCourseClassSchedule_routes_1.OfferedCourseClassScheduleRoutes,
    },
];
moduleRoutes.forEach(route => {
    if (route.routes) {
        router.use(route.path, route.routes);
    }
});
exports.default = router;
