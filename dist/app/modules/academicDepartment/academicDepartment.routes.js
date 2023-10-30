"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const academicDepartment_validations_1 = require("./academicDepartment.validations");
const router = express_1.default.Router();
router.get('/', academicDepartment_controller_1.AcademicDepartmentController.getAllAcademicDepartment);
router.get('/:id', academicDepartment_controller_1.AcademicDepartmentController.getAcademicDepartment);
router.post('/', (0, validateRequest_1.default)(academicDepartment_validations_1.AcademicDepartmentValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicDepartment_controller_1.AcademicDepartmentController.createAcademicDepartment);
router.patch('/:id', (0, validateRequest_1.default)(academicDepartment_validations_1.AcademicDepartmentValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicDepartment_controller_1.AcademicDepartmentController.updateAcademicDepartment);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), academicDepartment_controller_1.AcademicDepartmentController.deleteAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
