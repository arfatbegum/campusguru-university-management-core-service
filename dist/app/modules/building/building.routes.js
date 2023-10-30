"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const building_controller_1 = require("./building.controller");
const building_validations_1 = require("./building.validations");
const router = express_1.default.Router();
router.get('/', building_controller_1.BuildingController.getAllBuilding);
router.get('/:id', building_controller_1.BuildingController.getBuilding);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(building_validations_1.BuildingValidations.create), building_controller_1.BuildingController.createBuilding);
router.patch('/:id', (0, validateRequest_1.default)(building_validations_1.BuildingValidations.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), building_controller_1.BuildingController.updateBuilding);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), building_controller_1.BuildingController.deleteBuilding);
exports.BuildingRoutes = router;
