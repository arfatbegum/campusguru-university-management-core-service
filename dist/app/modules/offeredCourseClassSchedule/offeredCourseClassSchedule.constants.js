"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_DELETED = exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_UPDATED = exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_CREATED = exports.offeredCourseClassScheduleFilterableFields = exports.offeredCourseClassScheduleRelationalFieldsMapper = exports.offeredCourseClassScheduleRelationalFields = exports.offeredCourseClassScheduleSearchableFields = void 0;
exports.offeredCourseClassScheduleSearchableFields = ['dayOfWeek'];
exports.offeredCourseClassScheduleRelationalFields = [
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'facultyId',
    'roomId'
];
exports.offeredCourseClassScheduleRelationalFieldsMapper = {
    offeredCourseSectionId: 'offeredCourseSection',
    facultyId: 'faculty',
    roomId: 'room',
    semesterRegistrationId: 'semesterRegistration'
};
exports.offeredCourseClassScheduleFilterableFields = [
    'searchTerm',
    'dayOfWeek',
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'roomId',
    'facultyId'
];
exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_CREATED = 'offered-course.created';
exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_UPDATED = 'offered-course.updated';
exports.EVENT_OFFERED_COURSE_CLASS_SCHEDULE_DELETED = 'offered-course.deleted';
