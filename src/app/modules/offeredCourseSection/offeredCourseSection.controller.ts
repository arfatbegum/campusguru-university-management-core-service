import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { offeredCourseSectionFilterableFields } from "./offeredCourseSection.constants";
import { OfferedCourseSectionService } from "./offeredCourseSection.service";

const createOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseSectionService.createOfferedCourseSection(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Section created",
        data: result
    })
})

const getAllOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, offeredCourseSectionFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await OfferedCourseSectionService.getAllOfferedCourseSection(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OfferedCourseSections fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseSectionService.getOfferedCourseSection(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OfferedCourseSection fetched successfully',
        data: result
    });
})

const updateOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseSectionService.updateOfferedCourseSection(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OfferedCourseSection updated successfully',
        data: result
    });
})

const deleteOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseSectionService.deleteOfferedCourseSection(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Offered Course Section deleted successfully',
        data: result
    });
})


export const OfferedCourseSectionController = {
    createOfferedCourseSection,
    getAllOfferedCourseSection,
    getOfferedCourseSection,
    updateOfferedCourseSection,
    deleteOfferedCourseSection
}