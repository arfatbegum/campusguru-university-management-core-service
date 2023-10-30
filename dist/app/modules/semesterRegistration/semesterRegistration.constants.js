"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_AVAILABLE_COURSES = exports.EVENT_NEW_SEMESTER_STARTED = exports.EVENT_REGISTRATION_DETAILS = exports.EVENT_REGISTRATION_CONFIRMATION = exports.EVENT_WITHDREW_FROM_COURSE = exports.EVENT_ENROLLED_INTO_COURSE = exports.EVENT_SEMESTER_REGISTRATION_STARTED = exports.EVENT_SEMESTER_REGISTRATION_DELETED = exports.EVENT_SEMESTER_REGISTRATION_UPDATED = exports.EVENT_SEMESTER_REGISTRATION_CREATED = exports.semesterRegistrationRelationalFieldsMapper = exports.semesterRegistrationRelationalFields = exports.semesterRegistrationSearchableFields = exports.semesterRegistrationFilterableFields = void 0;
exports.semesterRegistrationFilterableFields = [
    'searchTerm',
    'id',
    'academicSemesterId'
];
exports.semesterRegistrationSearchableFields = [];
exports.semesterRegistrationRelationalFields = ['academicSemesterId'];
exports.semesterRegistrationRelationalFieldsMapper = {
    academicSemesterId: 'academicSemester'
};
exports.EVENT_SEMESTER_REGISTRATION_CREATED = 'semester-registration.created';
exports.EVENT_SEMESTER_REGISTRATION_UPDATED = 'semester-registration.updated';
exports.EVENT_SEMESTER_REGISTRATION_DELETED = 'semester-registration.deleted';
exports.EVENT_SEMESTER_REGISTRATION_STARTED = 'semester-registration.started';
exports.EVENT_ENROLLED_INTO_COURSE = 'enroll-into-course';
exports.EVENT_WITHDREW_FROM_COURSE = 'withdrew-from-course';
exports.EVENT_REGISTRATION_CONFIRMATION = 'registration-confirmation';
exports.EVENT_REGISTRATION_DETAILS = 'registration_details';
exports.EVENT_NEW_SEMESTER_STARTED = 'new-semester-started';
exports.EVENT_AVAILABLE_COURSES = 'available-courses';
