import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { facultyFilterableFields } from './faculty.constants';
import { FacultyService } from './faculty.service';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await FacultyService.createFaculty(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Faculty created successfully',
        data: result
    });
})

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, facultyFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await FacultyService.getAllFaculty(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Faculties fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FacultyService.getFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Faculty fetched successfully',
        data: result
    });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FacultyService.updateFaculty(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Faculty updated successfully',
        data: result
    });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FacultyService.deleteFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Faculty delete successfully',
        data: result
    });
});

const assignCourses = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body.faculties)
    const result = await FacultyService.assignCourses(id, req.body.courses);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course faculty assigned successfully',
        data: result
    });
})

const removeCourses = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(req.body.faculties)
    const result = await FacultyService.removeCourses(id, req.body.courses);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course faculty deleted successfully',
        data: result
    });
})

const myCourses = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    const filter = pick(req.query, ['academicSemesterId', 'courseId'])
    const result = await FacultyService.myCourses(user, filter);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My courses data fetched successfully!',
        data: result
    });
});

export const FacultyController = {
    createFaculty,
    getAllFaculty,
    getFaculty,
    updateFaculty,
    deleteFaculty,
    assignCourses,
    removeCourses,
    myCourses
};