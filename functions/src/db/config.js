"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env.prod' });
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_slug = process.env.DB_SLUG;
if (!db_user || !db_pass) {
    throw new Error('Environment variables not set.');
}
mongoose_1.default
    .connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.zkqfb.mongodb.net/${db_slug}?retryWrites=true&w=majority`)
    .then((response) => {
    console.log('Database connected');
})
    .catch((error) => {
    console.log('Database error\n', error);
});
