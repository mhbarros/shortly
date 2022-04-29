"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortHash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateShortHash = (data) => {
    const cryptoHash = crypto_1.default.createHash('sha256');
    cryptoHash.update(data);
    const hash = cryptoHash.digest();
    return hash
        .toString('base64')
        .replace(/[+=/!@#$%^&*()ç'"`~{\[\]}]*/g, '')
        .slice(0, 8);
};
exports.generateShortHash = generateShortHash;
