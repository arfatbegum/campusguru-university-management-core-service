export const offeredCourseFilterableFields: string[] = [
    'searchTerm',
    'id',
    'semesterRegistrationId',
    'courseId',
    'academicDepartmentId'
];

export const offeredCourseSearchableFields: string[] = [];

export const offeredCourseRelationalFields: string[] = [
    'semesterRegistrationId',
    'courseId',
    'academicDepartmentId'
];
export const offeredCourseRelationalFieldsMapper: { [key: string]: string } = {
    semesterRegistrationId: 'semesterRegistration',
    courseId: 'course',
    academicDepartmentId: 'academicDepartment'
};

export const EVENT_OFFERED_COURSE_CREATED = 'offered-course.created'
export const EVENT_OFFERED_COURSE_UPDATED = 'offered-course.updated'
export const EVENT_OFFERED_COURSE_DELETED = 'offered-course.deleted'