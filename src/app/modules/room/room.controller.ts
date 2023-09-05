import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { roomFilterableFields } from './room.constants';
import { RoomService } from './room.service';

const createRoom = catchAsync(async (req: Request, res: Response) => {
    const result = await RoomService.createRoom(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room created successfully',
        data: result
    });
});

const getAllRoom = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, roomFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await RoomService.getAllRoom(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rooms fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getRoom = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RoomService.getRoom(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room fetched successfully',
        data: result
    });
})

const updateRoom = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RoomService.updateRoom(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room updated successfully',
        data: result
    });
})

const deleteRoom = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await RoomService.deleteRoom(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room deleted successfully',
        data: result
    });
})

export const RoomController = {
    createRoom,
    getAllRoom,
    getRoom,
    updateRoom,
    deleteRoom
};