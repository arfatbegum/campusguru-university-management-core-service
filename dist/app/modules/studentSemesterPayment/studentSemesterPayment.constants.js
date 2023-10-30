"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_SEMESTER_PAYMENT_CREATED = exports.studentSemesterPaymentRelationalFieldsMapper = exports.studentSemesterPaymentRelationalFields = exports.studentSemesterPaymentSearchableFields = exports.studentSemesterPaymentFilterableFields = void 0;
exports.studentSemesterPaymentFilterableFields = ['academicSemesterId', 'studentId'];
exports.studentSemesterPaymentSearchableFields = [];
exports.studentSemesterPaymentRelationalFields = ['academicSemesterId', 'studentId'];
exports.studentSemesterPaymentRelationalFieldsMapper = {
    academicSemesterId: 'academicSemester',
    studentId: 'student'
};
exports.EVENT_SEMESTER_PAYMENT_CREATED = 'semester-payment.created';
