import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicFacultyService.createAcademicFaculty(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicFaculty created successfully',
        data: result
    });
})

const getAllAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, academicFacultyFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AcademicFacultyService.getAllAcademicFaculty(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicFaculties fetched successfully',
        meta: result.meta,
        data: result.data
    });
});

const getAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.getAcademicFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicFaculty fetched successfully',
        data: result
    });
})

const updateAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.updateAcademicFaculty(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicFaculty updated successfully',
        data: result
    });
});

const deleteAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyService.deleteAcademicFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicFaculty delete successfully',
        data: result
    });
});


export const AcademicFacultyController = {
   createAcademicFaculty,
    getAllAcademicFaculty,
    getAcademicFaculty,
    updateAcademicFaculty,
    deleteAcademicFaculty
};