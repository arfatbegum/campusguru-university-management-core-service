export const semesterRegistrationFilterableFields: string[] = [
    'searchTerm',
    'id',
    'academicSemesterId'
];

export const semesterRegistrationSearchableFields: string[] = [];

export const semesterRegistrationRelationalFields: string[] = ['academicSemesterId'];
export const semesterRegistrationRelationalFieldsMapper: { [key: string]: string } = {
    academicSemesterId: 'academicSemester'
};

export const EVENT_SEMESTER_REGISTRATION_CREATED = 'semester-registration.created'
export const EVENT_SEMESTER_REGISTRATION_UPDATED = 'semester-registration.updated'
export const EVENT_SEMESTER_REGISTRATION_DELETED = 'semester-registration.deleted'
export const EVENT_SEMESTER_REGISTRATION_STARTED = 'semester-registration.started'
export const EVENT_ENROLLED_INTO_COURSE = 'enroll-into-course'
export const EVENT_WITHDREW_FROM_COURSE = 'withdrew-from-course'
export const EVENT_REGISTRATION_CONFIRMATION = 'registration-confirmation'
export const EVENT_REGISTRATION_DETAILS = 'registration_details'
export const EVENT_NEW_SEMESTER_STARTED = 'new-semester-started'
export const EVENT_AVAILABLE_COURSES = 'available-courses'