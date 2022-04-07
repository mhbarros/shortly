"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_user = process.env.DB_USER || 'mhbarros';
const db_pass = process.env.DB_PASS || 'IIyRjDPaYc72lYwj';
if (!db_user || !db_pass) {
    throw new Error('Environment variables not set.');
}
mongoose_1.default
    .connect('mongodb+srv://mhbarros:IIyRjDPaYc72lYwj@cluster0.zkqfb.mongodb.net/url-shortner?retryWrites=true&w=majority')
    .then((response) => {
    console.log('Database connected');
})
    .catch((error) => {
    console.log('Database error\n', error);
});
