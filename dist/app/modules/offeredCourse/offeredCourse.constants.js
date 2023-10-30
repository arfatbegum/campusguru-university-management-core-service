"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_OFFERED_COURSE_DELETED = exports.EVENT_OFFERED_COURSE_UPDATED = exports.EVENT_OFFERED_COURSE_CREATED = exports.offeredCourseRelationalFieldsMapper = exports.offeredCourseRelationalFields = exports.offeredCourseSearchableFields = exports.offeredCourseFilterableFields = void 0;
exports.offeredCourseFilterableFields = [
    'searchTerm',
    'id',
    'semesterRegistrationId',
    'courseId',
    'academicDepartmentId'
];
exports.offeredCourseSearchableFields = [];
exports.offeredCourseRelationalFields = [
    'semesterRegistrationId',
    'courseId',
    'academicDepartmentId'
];
exports.offeredCourseRelationalFieldsMapper = {
    semesterRegistrationId: 'semesterRegistration',
    courseId: 'course',
    academicDepartmentId: 'academicDepartment'
};
exports.EVENT_OFFERED_COURSE_CREATED = 'offered-course.created';
exports.EVENT_OFFERED_COURSE_UPDATED = 'offered-course.updated';
exports.EVENT_OFFERED_COURSE_DELETED = 'offered-course.deleted';
