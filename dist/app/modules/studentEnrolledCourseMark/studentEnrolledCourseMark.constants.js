"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_STUDENT_ENROLLED_COURSE_FINAL_MARK_UPDATED = exports.EVENT_STUDENT_ENROLLED_COURSE_MARK_UPDATED = exports.EVENT_STUDENT_ENROLLED_COURSE_MARK_CREATED = exports.studentEnrolledCourseMarkRelationalFieldsMapper = exports.studentEnrolledCourseMarkRelationalFields = exports.studentEnrolledCourseMarkSearchableFields = exports.studentEnrolledCourseMarkFilterableFields = void 0;
exports.studentEnrolledCourseMarkFilterableFields = [
    'academicSemesterId',
    'studentId',
    'studentEnrolledCourseId',
    'examType',
    'courseId'
];
exports.studentEnrolledCourseMarkSearchableFields = ['examType', 'grade'];
exports.studentEnrolledCourseMarkRelationalFields = [
    'academicSemesterId',
    'studentId',
    'studentEnrolledCourseId'
];
exports.studentEnrolledCourseMarkRelationalFieldsMapper = {
    academicSemesterId: 'academicSemester',
    studentId: 'student',
    studentEnrolledCourseId: 'studentEnrolledCourse'
};
exports.EVENT_STUDENT_ENROLLED_COURSE_MARK_CREATED = 'student-enrolled-course-mark.created';
exports.EVENT_STUDENT_ENROLLED_COURSE_MARK_UPDATED = 'student-enrolled-course-mark.updated';
exports.EVENT_STUDENT_ENROLLED_COURSE_FINAL_MARK_UPDATED = 'student-enrolled-course-final-mark.updated';
