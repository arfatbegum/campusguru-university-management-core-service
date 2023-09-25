export const roomFilterableFields: string[] = ['searchTerm', 'id', 'buildingId'];

export const roomSearchableFields: string[] = ['roomNumber', 'floor'];

export const roomRelationalFields: string[] = ['buildingId'];
export const roomRelationalFieldsMapper: { [key: string]: string } = {
    buildingId: 'building'
};

export const EVENT_ROOM_CREATED = 'room.created'
export const EVENT_ROOM_UPDATED = 'room.updated'
export const EVENT_ROOM_DELETED = 'room.deleted'