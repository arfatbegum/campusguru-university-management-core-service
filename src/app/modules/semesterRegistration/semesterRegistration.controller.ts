/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { semesterRegistrationFilterableFields } from "./semesterRegistration.constants";
import { SemesterRegistrationService } from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
    const result = await SemesterRegistrationService.createSemesterRegistration(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester Registration created",
        data: result
    })
})


const getAllSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, semesterRegistrationFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await SemesterRegistrationService.getAllSemesterRegistration(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistrations fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.getSemesterRegistration(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistration fetched successfully',
        data: result
    });
})

const updateSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.updateSemesterRegistration(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistration updated successfully',
        data: result
    });
})


const deleteSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.deleteSemesterRegistration(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester Registration deleted successfully',
        data: result
    });
})

const startMyRegistration = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await SemesterRegistrationService.startMyRegistration(user.userId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student SemesterRegistration started successfully',
        data: result
    });
})

const enrollIntoCourse = catchAsync(async (req: Request, res: Response) => {

    const user = (req as any).user;
    const result = await SemesterRegistrationService.enrollIntoCourse(user.userId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student SemesterRegistration course enrolled successfully',
        data: result
    });
})

const withdrawFromCourse = catchAsync(async (req: Request, res: Response) => {

    const user = (req as any).user;
    const result = await SemesterRegistrationService.withdrewFromCourse(user.userId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student Withdraw from successfully',
        data: result
    });
})

const confirmMyRegistration = catchAsync(async (req: Request, res: Response) => {

    const user = (req as any).user;
    const result = await SemesterRegistrationService.confirmMyRegistration(user.userId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Confirm your registration!',
        data: result
    });
})

const getMyRegistration = catchAsync(async (req: Request, res: Response) => {
    console.log("get my reg")
    const user = (req as any).user;
    const result = await SemesterRegistrationService.getMyRegistration(user.userId)
    console.log(result)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My registration data fatched!',
        data: result
    });
})

const startNewSemester = catchAsync(async (req: Request, res: Response) => {
    // /:id/start-new-semester
    const { id } = req.params;
    const result = await SemesterRegistrationService.startNewSemester(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester Started Successfully!',
        data: result
    });
})

const getMySemesterRegisterCourses = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await SemesterRegistrationService.getMySemesterRegisterCourses(user.userId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My registration courses data fatched!',
        data: result
    });
})

export const SemesterRegistrationController = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSemesterRegistration,
    updateSemesterRegistration,
    deleteSemesterRegistration,
    startMyRegistration,
    enrollIntoCourse,
    withdrawFromCourse,
    confirmMyRegistration,
    getMyRegistration,
    startNewSemester,
    getMySemesterRegisterCourses
}