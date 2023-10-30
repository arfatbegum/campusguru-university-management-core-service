"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemeterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemster_controller_1 = require("./academicSemster.controller");
const academicSemster_validation_1 = require("./academicSemster.validation");
const router = express_1.default.Router();
router.get('/', academicSemster_controller_1.AcademicSemeterController.getAllAcademicSemester);
router.get('/:id', academicSemster_controller_1.AcademicSemeterController.getAcademicSemesterById);
router.post('/', (0, validateRequest_1.default)(academicSemster_validation_1.AcademicSemesterValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), academicSemster_controller_1.AcademicSemeterController.createAcademicSemester);
router.patch('/:id', (0, validateRequest_1.default)(academicSemster_validation_1.AcademicSemesterValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemster_controller_1.AcademicSemeterController.updateAcademicSemester);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicSemster_controller_1.AcademicSemeterController.deleteAcademicSemester);
exports.AcademicSemeterRoutes = router;
