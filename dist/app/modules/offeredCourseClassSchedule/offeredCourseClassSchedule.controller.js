"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseClassScheduleController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const offeredCourseClassSchedule_constants_1 = require("./offeredCourseClassSchedule.constants");
const offeredCourseClassSchedule_service_1 = require("./offeredCourseClassSchedule.service");
const createOfferedCourseClassSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Offered Course Class Schedule Created!",
        data: result
    });
}));
const getAllOfferedCourseClassSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, offeredCourseClassSchedule_constants_1.offeredCourseClassScheduleFilterableFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedule(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Offered Course class schedule fetched successfully',
        meta: result.meta,
        data: result.data
    });
}));
const getOfferedCourseClassSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleService.getOfferedCourseClassSchedule(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Offered Course Class Schedule fetched successfully',
        data: result
    });
}));
const updateOfferedCourseClassSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Offered Course Class Schedule updated successfully',
        data: result
    });
}));
const deleteOfferedCourseClassSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Offered Course Class Schedule deleted successfully',
        data: result
    });
}));
exports.OfferedCourseClassScheduleController = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedule,
    getOfferedCourseClassSchedule,
    updateOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
};
