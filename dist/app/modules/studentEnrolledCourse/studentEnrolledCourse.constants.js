"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_STUDENT_ENROLLED_COURSE_DELETED = exports.EVENT_STUDENT_ENROLLED_COURSE_UPDATED = exports.EVENT_STUDENT_ENROLLED_COURSE_CREATED = exports.studentEnrolledCourseRelationalFieldsMapper = exports.studentEnrolledCourseRelationalFields = exports.studentEnrolledCourseSearchableFields = exports.studentEnrolledCourseFilterableFields = void 0;
exports.studentEnrolledCourseFilterableFields = [
    'academicSemesterId',
    'studentId',
    'courseId',
    'status',
    'grade'
];
exports.studentEnrolledCourseSearchableFields = [];
exports.studentEnrolledCourseRelationalFields = [
    'academicSemesterId',
    'studentId',
    'courseId'
];
exports.studentEnrolledCourseRelationalFieldsMapper = {
    academicSemesterId: 'academicSemester',
    studentId: 'student',
    courseId: 'course'
};
exports.EVENT_STUDENT_ENROLLED_COURSE_CREATED = 'student-enrolled-course.created';
exports.EVENT_STUDENT_ENROLLED_COURSE_UPDATED = 'student-enrolled-course.updated';
exports.EVENT_STUDENT_ENROLLED_COURSE_DELETED = 'student-enrolled-course.deleted';
