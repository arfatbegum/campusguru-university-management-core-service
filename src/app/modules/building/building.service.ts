/* eslint-disable no-undef */
import { Building, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { EVENT_BUILDING_CREATED, EVENT_BUILDING_DELETED, EVENT_BUILDING_UPDATED, buildingSearchableFields } from "./building.constants";
import { IBuildingFilterRequest } from "./building.interface";
import { RedisClient } from "../../../shared/redis";

const createBuilding = async (data: Building): Promise<Building> => {
    const result = await prisma.building.create({
        data
    })
    if (result) {
        await RedisClient.publish(EVENT_BUILDING_CREATED, JSON.stringify(result))
    }
    return result;
}

const getAllBuilding = async (
    filters: IBuildingFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<Building[]>> => {
    const { page, limit, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters;

    const andConditons = [];

    if (searchTerm) {
        andConditons.push({
            OR: buildingSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    }

    const whereConditons: Prisma.BuildingWhereInput =
        andConditons.length > 0 ? { AND: andConditons } : {};

    const result = await prisma.building.findMany({
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
    const total = await prisma.building.count({
        where: whereConditons
    })

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
}

const getBuilding = async (id: string): Promise<Building | null> => {
    const result = await prisma.building.findUnique({
        where: {
            id
        }
    });
    return result;
};

const updateBuilding = async (id: string, payload: Partial<Building>): Promise<Building> => {
    const result = await prisma.building.update({
        where: {
            id
        },
        data: payload
    });

    if (result) {
        await RedisClient.publish(EVENT_BUILDING_UPDATED, JSON.stringify(result))
    }

    return result;
};

const deleteBuilding = async (id: string): Promise<Building> => {
    const result = await prisma.building.delete({
        where: {
            id
        }
    });
    if (result) {
        await RedisClient.publish(EVENT_BUILDING_DELETED, JSON.stringify(result))
    }
    return result;
};

export const BuildingService = {
    createBuilding,
    getAllBuilding,
    getBuilding,
    updateBuilding,
    deleteBuilding
}