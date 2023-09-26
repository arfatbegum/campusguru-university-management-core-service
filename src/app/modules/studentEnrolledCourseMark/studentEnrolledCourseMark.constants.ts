export const studentEnrolledCourseMarkFilterableFields: string[] = [
    'academicSemesterId',
    'studentId',
    'studentEnrolledCourseId',
    'examType',
    'courseId'
];

export const studentEnrolledCourseMarkSearchableFields: string[] = ['examType', 'grade'];

export const studentEnrolledCourseMarkRelationalFields: string[] = [
    'academicSemesterId',
    'studentId',
    'studentEnrolledCourseId'
];
export const studentEnrolledCourseMarkRelationalFieldsMapper: { [key: string]: string } = {
    academicSemesterId: 'academicSemester',
    studentId: 'student',
    studentEnrolledCourseId: 'studentEnrolledCourse'
};

export const EVENT_STUDENT_ENROLLED_COURSE_MARK_CREATED = 'student-enrolled-course-mark.created'
export const EVENT_STUDENT_ENROLLED_COURSE_MARK_UPDATED = 'student-enrolled-course-mark.updated'
export const EVENT_STUDENT_ENROLLED_COURSE_FINAL_MARK_UPDATED = 'student-enrolled-course-final-mark.updated'