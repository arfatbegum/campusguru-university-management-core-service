"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_OFFERED_COURSE_SECTIONS_DELETED = exports.EVENT_OFFERED_COURSE_SECTIONS_UPDATED = exports.EVENT_OFFERED_COURSE_SECTIONS_CREATED = exports.daysInWeek = exports.offeredCourseSectionRelationalFieldsMapper = exports.offeredCourseSectionRelationalFields = exports.offeredCourseSectionSearchableFields = exports.offeredCourseSectionFilterableFields = void 0;
exports.offeredCourseSectionFilterableFields = [
    'searchTerm',
    'id',
    'offeredCourseId',
    'semesterRegistrationId'
];
exports.offeredCourseSectionSearchableFields = [];
exports.offeredCourseSectionRelationalFields = [
    'offeredCourseId',
    'semesterRegistrationId'
];
exports.offeredCourseSectionRelationalFieldsMapper = {
    offeredCourseId: 'offeredCourse',
    semesterRegistrationId: 'semesterRegistration'
};
exports.daysInWeek = [
    'SATURDAY',
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY'
];
exports.EVENT_OFFERED_COURSE_SECTIONS_CREATED = 'offered-course-sections.created';
exports.EVENT_OFFERED_COURSE_SECTIONS_UPDATED = 'offered-course-sections.updated';
exports.EVENT_OFFERED_COURSE_SECTIONS_DELETED = 'offered-course-sections.deleted';
