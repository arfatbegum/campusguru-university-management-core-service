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
exports.BuildingService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const building_constants_1 = require("./building.constants");
const redis_1 = require("../../../shared/redis");
const createBuilding = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.building.create({
        data
    });
    if (result) {
        yield redis_1.RedisClient.publish(building_constants_1.EVENT_BUILDING_CREATED, JSON.stringify(result));
    }
    return result;
});
const getAllBuilding = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters;
    const andConditons = [];
    if (searchTerm) {
        andConditons.push({
            OR: building_constants_1.buildingSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        });
    }
    const whereConditons = andConditons.length > 0 ? { AND: andConditons } : {};
    const result = yield prisma_1.default.building.findMany({
        skip,
        take: limit,
        where: whereConditons,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                createdAt: 'desc'
            }
    });
    const total = yield prisma_1.default.building.count({
        where: whereConditons
    });
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
});
const getBuilding = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.building.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateBuilding = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.building.update({
        where: {
            id
        },
        data: payload
    });
    if (result) {
        yield redis_1.RedisClient.publish(building_constants_1.EVENT_BUILDING_UPDATED, JSON.stringify(result));
    }
    return result;
});
const deleteBuilding = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.building.delete({
        where: {
            id
        }
    });
    if (result) {
        yield redis_1.RedisClient.publish(building_constants_1.EVENT_BUILDING_DELETED, JSON.stringify(result));
    }
    return result;
});
exports.BuildingService = {
    createBuilding,
    getAllBuilding,
    getBuilding,
    updateBuilding,
    deleteBuilding
};
