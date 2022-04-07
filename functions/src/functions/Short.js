"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const LinkRepository_1 = require("../repository/LinkRepository");
const crypto_1 = require("../helper/crypto");
const cors_1 = __importDefault(require("cors"));
const Cors = (0, cors_1.default)({ origin: true });
const Short = functions.https.onRequest((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    Cors(request, response, () => __awaiter(void 0, void 0, void 0, function* () {
        if (request.method !== 'POST') {
            response.status(404).send();
            return;
        }
        const { url } = request.body; // todo: validation
        if (!url) {
            response
                .status(400)
                .json({ error: "Required parameter 'url' not set." });
            return;
        }
        const shortHash = (0, crypto_1.generateShortHash)(Date.now().toString()); // todo: better hash
        try {
            yield new LinkRepository_1.LinkRepository().create(url, shortHash);
        }
        catch (e) {
            response.status(400).json({ error: e.message });
        }
        response.status(200).json({
            short: process.env.BASE_URL + shortHash,
        });
    }));
}));
exports.default = Short;
