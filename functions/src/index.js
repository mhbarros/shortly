"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geturl = exports.short = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env);
require("../db/config");
const Short_1 = __importDefault(require("./functions/Short"));
const GetUrl_1 = __importDefault(require("./functions/GetUrl"));
exports.short = Short_1.default;
exports.geturl = GetUrl_1.default;
