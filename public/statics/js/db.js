import Dexie from "dexie";

const DB_VERSION = 1;

export const db = new Dexie("negahbani");
db.version(DB_VERSION).stores({
    personlogs: '_id',
    syncPersonlogs : 'name',
});

db.version(DB_VERSION).stores({
    trackings: '_id',
    syncTrackings : '++_id'
});

db.version(DB_VERSION).stores({
    reports: '_id',
    syncReports : '++_id',
});

db.version(DB_VERSION).stores({
    chattings: '_id',
    syncChattings : '++_id'
});

db.version(DB_VERSION).stores({
    chatrooms: '_id',
    syncChatrooms : '++_id'
});

