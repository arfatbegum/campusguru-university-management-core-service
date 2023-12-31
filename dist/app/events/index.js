"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faculty_events_1 = __importDefault(require("../modules/faculty/faculty.events"));
const subscribeToEvents = () => {
    (0, faculty_events_1.default)();
};
exports.default = subscribeToEvents;
