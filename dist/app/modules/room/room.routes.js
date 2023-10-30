"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_controller_1 = require("./room.controller");
const room_validations_1 = require("./room.validations");
const router = express_1.default.Router();
router.get('/', room_controller_1.RoomController.getAllRoom);
router.get('/:id', room_controller_1.RoomController.getRoom);
router.post('/', (0, validateRequest_1.default)(room_validations_1.RoomValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), room_controller_1.RoomController.createRoom);
router.patch('/:id', (0, validateRequest_1.default)(room_validations_1.RoomValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), room_controller_1.RoomController.updateRoom);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), room_controller_1.RoomController.deleteRoom);
exports.RoomRoutes = router;
