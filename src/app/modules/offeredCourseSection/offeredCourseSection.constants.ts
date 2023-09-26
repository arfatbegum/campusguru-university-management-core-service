export const offeredCourseSectionFilterableFields: string[] = [
    'searchTerm',
    'id',
    'offeredCourseId',
    'semesterRegistrationId'
];

export const offeredCourseSectionSearchableFields: string[] = [];

export const offeredCourseSectionRelationalFields: string[] = [
    'offeredCourseId',
    'semesterRegistrationId'
];
export const offeredCourseSectionRelationalFieldsMapper: { [key: string]: string } = {
    offeredCourseId: 'offeredCourse',
    semesterRegistrationId: 'semesterRegistration'
};

export const daysInWeek = [
    'SATURDAY',
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY'
];

export const EVENT_OFFERED_COURSE_SECTIONS_CREATED = 'offered-course-sections.created'
export const EVENT_OFFERED_COURSE_SECTIONS_UPDATED = 'offered-course-sections.updated'
export const EVENT_OFFERED_COURSE_SECTIONS_DELETED = 'offered-course-sections.deleted'