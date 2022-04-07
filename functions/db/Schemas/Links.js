"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksSchema = void 0;
const mongoose_1 = require("mongoose");
const LinksSchema = new mongoose_1.Schema({
    url: String,
    hash: String,
    created_at: Date,
});
exports.LinksSchema = LinksSchema;
