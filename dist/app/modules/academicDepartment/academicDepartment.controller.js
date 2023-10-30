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
exports.AcademicDepartmentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const academicDepartment_contants_1 = require("./academicDepartment.contants");
const academicDepartment_service_1 = require("./academicDepartment.service");
const createAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_service_1.AcademicDepartmentService.createAcademicDepartment(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Department created successfully',
        data: result,
    });
}));
const getAllAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, academicDepartment_contants_1.academicDepartmentFilterableFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield academicDepartment_service_1.AcademicDepartmentService.getAllAcademicDepartment(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Departments fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield academicDepartment_service_1.AcademicDepartmentService.getAcademicDepartment(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Department fetched successfully',
        data: result,
    });
}));
const updateAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield academicDepartment_service_1.AcademicDepartmentService.updateAcademicDepartment(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Department updated successfully',
        data: result,
    });
}));
const deleteAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield academicDepartment_service_1.AcademicDepartmentService.deleteAcademicDepartment(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Department delete successfully',
        data: result,
    });
}));
exports.AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getAcademicDepartment,
    updateAcademicDepartment,
    deleteAcademicDepartment,
};
