"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const offeredCourse_controller_1 = require("./offeredCourse.controller");
const offeredCourse_validation_1 = require("./offeredCourse.validation");
const router = express_1.default.Router();
router.get('/', offeredCourse_controller_1.OfferedCourseController.getAllOfferedCourse);
router.get('/:id', offeredCourse_controller_1.OfferedCourseController.getOfferedCourse);
router.post('/', (0, validateRequest_1.default)(offeredCourse_validation_1.OfferedCourseValidations.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.createOfferedCourse);
router.patch('/:id', (0, validateRequest_1.default)(offeredCourse_validation_1.OfferedCourseValidations.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.updateOfferedCourse);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.deleteOfferedCourse);
exports.OfferedCourseRoutes = router;
