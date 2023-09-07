import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { offeredCourseClassScheduleFilterableFields } from "./offeredCourseClassSchedule.constants";
import { OfferedCourseClassScheduleService } from "./offeredCourseClassSchedule.service";

const createOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Class Schedule Created!",
        data: result
    })
})

const getAllOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, offeredCourseClassScheduleFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedule(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course class schedule fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseClassScheduleService.getOfferedCourseClassSchedule(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course Class Schedule fetched successfully',
        data: result
    });
})

const updateOfferedCourseClassSchedule= catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course Class Schedule updated successfully',
        data: result
    });
})

const deleteOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course Class Schedule deleted successfully',
        data: result
    });
})

export const OfferedCourseClassScheduleController = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedule,
    getOfferedCourseClassSchedule,
    updateOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
}