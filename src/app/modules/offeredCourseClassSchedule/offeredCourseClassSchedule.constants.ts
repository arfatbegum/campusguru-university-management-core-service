export const offeredCourseClassScheduleSearchableFields = ['dayOfWeek'];

export const offeredCourseClassScheduleRelationalFields = [
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'facultyId',
    'roomId'
]

export const offeredCourseClassScheduleRelationalFieldsMapper: { [key: string]: string } = {
    offeredCourseSectionId: 'offeredCourseSection',
    facultyId: 'faculty',
    roomId: 'room',
    semesterRegistrationId: 'semesterRegistration'
}


export const offeredCourseClassScheduleFilterableFields = [
    'searchTerm',
    'dayOfWeek',
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'roomId',
    'facultyId'
]

export const EVENT_OFFERED_COURSE_CLASS_SCHEDULE_CREATED = 'offered-course.created'
export const EVENT_OFFERED_COURSE_CLASS_SCHEDULE_UPDATED = 'offered-course.updated'
export const EVENT_OFFERED_COURSE_CLASS_SCHEDULE_DELETED = 'offered-course.deleted'