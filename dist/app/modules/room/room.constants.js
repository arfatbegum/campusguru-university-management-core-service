"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_ROOM_DELETED = exports.EVENT_ROOM_UPDATED = exports.EVENT_ROOM_CREATED = exports.roomRelationalFieldsMapper = exports.roomRelationalFields = exports.roomSearchableFields = exports.roomFilterableFields = void 0;
exports.roomFilterableFields = ['searchTerm', 'id', 'buildingId'];
exports.roomSearchableFields = ['roomNumber', 'floor'];
exports.roomRelationalFields = ['buildingId'];
exports.roomRelationalFieldsMapper = {
    buildingId: 'building'
};
exports.EVENT_ROOM_CREATED = 'room.created';
exports.EVENT_ROOM_UPDATED = 'room.updated';
exports.EVENT_ROOM_DELETED = 'room.deleted';
