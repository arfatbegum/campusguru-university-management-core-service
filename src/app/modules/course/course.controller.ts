import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { courseFilterableFields } from "./course.constants";
import { CourseService } from "./course.service";

const createCourse = catchAsync(async (req: Request, res: Response) => {
    //console.log(req.body)
    const result = await CourseService.createCourse(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Course created successufully",
        data: result
    })
})

const getAllCourse = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, courseFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await CourseService.getAllCourse(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Courses fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CourseService.getCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course fetched successfully',
        data: result
    });
})

const updateCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CourseService.updateCourse(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course updated successfully',
        data: result
    });
})

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CourseService.deleteCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course deleted successfully',
        data: result
    });
})


const assignFaculties = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body.faculties)
    const result = await CourseService.assignFaculties(id, req.body.faculties);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course faculty assigned successfully',
        data: result
    });
})

const removeFaculties = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body.faculties)
    const result = await CourseService.removeFaculties(id, req.body.faculties);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course faculty deleted successfully',
        data: result
    });
})

export const CourseController = {
    createCourse,
    getAllCourse,
    getCourse,
    deleteCourse,
    updateCourse,
    assignFaculties,
    removeFaculties
}