import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { studentEnrolledCourseFilterableFields } from './studentEnrolledCourse.constants';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';

const createStudentEnrolledCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await StudentEnrolledCourseService.createStudentEnrolledCourse(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'StudentEnrolledCourse created successfully',
        data: result
    });
});

const getAllStudentEnrolledCourse = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, studentEnrolledCourseFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await StudentEnrolledCourseService.getAllStudentEnrolledCourse(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'StudentEnrolledCourses fetched successfully',
        meta: result.meta,
        data: result.data
    });
});

const getStudentEnrolledCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await StudentEnrolledCourseService.getStudentEnrolledCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'StudentEnrolledCourse fetched successfully',
        data: result
    });
});


const updateStudentEnrolledCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await StudentEnrolledCourseService.updateStudentEnrolledCourse(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'StudentEnrolledCourse updated successfully',
        data: result
    });
});

const deleteStudentEnrolledCourse= catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await StudentEnrolledCourseService.deleteStudentEnrolledCourse(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'StudentEnrolledCourse deleted successfully',
        data: result
    });
});

export const StudentEnrolledCourseController = {
    createStudentEnrolledCourse,
    getAllStudentEnrolledCourse,
    getStudentEnrolledCourse,
    updateStudentEnrolledCourse,
    deleteStudentEnrolledCourse
};