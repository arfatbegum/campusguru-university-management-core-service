import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { offeredCourseFilterableFields } from "./offeredCourse.constants";
import { offeredCourseService } from "./offeredCourse.service";

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await offeredCourseService.createOfferedCourse(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Created",
        data: result
    })
})

const getAllOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, offeredCourseFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await offeredCourseService.getAllOfferedCourse(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Courses fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await offeredCourseService.getOfferedCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course fetched successfully',
        data: result
    });
})

const updateOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await offeredCourseService.updateOfferedCourse(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course updated successfully',
        data: result
    });
})

const deleteOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await offeredCourseService.deleteOfferedCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course deleted successfully',
        data: result
    });
})

export const OfferedCourseController = {
    createOfferedCourse,
    getAllOfferedCourse,
    getOfferedCourse,
    updateOfferedCourse,
    deleteOfferedCourse
}