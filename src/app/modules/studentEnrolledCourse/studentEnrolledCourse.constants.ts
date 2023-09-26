export const studentEnrolledCourseFilterableFields: string[] = [
    'academicSemesterId',
    'studentId',
    'courseId',
    'status',
    'grade'
];

export const studentEnrolledCourseSearchableFields: string[] = [];

export const studentEnrolledCourseRelationalFields: string[] = [
    'academicSemesterId',
    'studentId',
    'courseId'
];
export const studentEnrolledCourseRelationalFieldsMapper: { [key: string]: string } = {
    academicSemesterId: 'academicSemester',
    studentId: 'student',
    courseId: 'course'
};

export const EVENT_STUDENT_ENROLLED_COURSE_CREATED = 'student-enrolled-course.created'
export const EVENT_STUDENT_ENROLLED_COURSE_UPDATED = 'student-enrolled-course.updated'
export const EVENT_STUDENT_ENROLLED_COURSE_DELETED = 'student-enrolled-course.deleted'