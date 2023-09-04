import { AcademicSemester } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemesterService } from "./academicSemester.service";
import { AcademicSemesterFilterAbleFileds } from "./academicSemeter.contants";

const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemester(req.body);
    sendResponse<AcademicSemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semster Created!!",
        data: result
    })
})

const getAllAcademicSemester = catchAsync(async (req: Request, res: Response) => {

    const filters = pick(req.query, AcademicSemesterFilterAbleFileds);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await AcademicSemesterService.getAllAcademicSemester(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semster data fetched!!",
        meta: result.meta,
        data: result.data
    })
})

const getAcademicSemesterById = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getAcademicSemesterById(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semster data fetched!!",
        data: result
    })
})

const updateAcademicSemester = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.updateAcademicSemester(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semster updated successfully',
        data: result
    });
});

const deleteAcademicSemester = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.deleteAcademicSemester(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semster delete successfully',
        data: result
    });
});

export const AcademicSemeterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getAcademicSemesterById,
    updateAcademicSemester,
    deleteAcademicSemester
}