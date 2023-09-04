/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicSemester, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IAcademicSemeterFilterRequest } from "./academicSemester.interface";
import { AcademicSemesterSearchAbleFields } from "./academicSemeter.contants";
import prisma from "../../../shared/prisma";


const createAcademicSemester = async (academicSemesterData: AcademicSemester): Promise<AcademicSemester> => {
    const result = await prisma.academicSemester.create({
        data: academicSemesterData
    })

    return result;
}

const getAllAcademicSemester = async (
    filters: IAcademicSemeterFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<AcademicSemester[]>> => {
    const { page, limit, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, ...filterData } = filters;
    console.log(options)
    const andConditons = [];

    if (searchTerm) {
        andConditons.push({
            OR: AcademicSemesterSearchAbleFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    }

    if (Object.keys(filterData).length > 0) {
        andConditons.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    }

    const whereConditons: Prisma.AcademicSemesterWhereInput =
        andConditons.length > 0 ? { AND: andConditons } : {};

    const result = await prisma.academicSemester.findMany({
        where: whereConditons,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                createdAt: 'desc'
            }
    });

    const total = await prisma.academicSemester.count();

    return {
        meta: {
            total,
            page,
            limit
        },
        data: result
    }
}

const getAcademicSemesterById = async (id: string): Promise<AcademicSemester | null> => {
    const result = await prisma.academicSemester.findUnique({
        where: {
            id
        }
    })

    return result;
}

const updateAcademicSemester = async (
    id: string,
    payload: Partial<AcademicSemester>
): Promise<AcademicSemester> => {
    const result = await prisma.academicSemester.update({
        where: {
            id
        },
        data: payload
    });
    return result;
};

const deleteAcademicSemester = async (id: string): Promise<AcademicSemester> => {
    const result = await prisma.academicSemester.delete({
        where: {
            id
        }
    });
    return result;
};


export const AcademicSemesterService = {
    createAcademicSemester,
    getAllAcademicSemester,
    getAcademicSemesterById,
    updateAcademicSemester,
    deleteAcademicSemester
}