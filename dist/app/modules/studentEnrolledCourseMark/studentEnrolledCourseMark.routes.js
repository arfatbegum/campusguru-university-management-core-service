"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentEnrolledCourseMarkRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const studentEnrolledCourseMark_controller_1 = require("./studentEnrolledCourseMark.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.FACULTY), studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.getAllStudentMarks);
router.patch('/update-marks', studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.updateStudentMarks);
router.patch('/update-final-marks', studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.updateFinalMarks);
exports.studentEnrolledCourseMarkRoutes = router;
