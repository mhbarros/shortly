"use strict";
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
const LinkRepository_1 = require("../repository/LinkRepository");
const crypto_1 = require("../helper/crypto");
const cors_1 = __importDefault(require("cors"));
const Cors = (0, cors_1.default)({ origin: true });
const Short = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    Cors(request, response, () => __awaiter(void 0, void 0, void 0, function* () {
        if (request.method !== 'POST') {
            response.status(405);
            response.send();
            return;
        }
        const { url } = request.body; // todo: validation
        if (!url) {
            response.status(400);
            response.json({ error: "Required parameter 'url' not set." });
            return;
        }
        const shortHash = (0, crypto_1.generateShortHash)(Date.now().toString()).replace('+', ''); // todo: better hash
        try {
            yield new LinkRepository_1.LinkRepository().create(url, shortHash);
        }
        catch (e) {
            response.status(400);
            response.json({ error: e.message });
            return;
        }
        response.status(200);
        response.json({
            short: process.env.BASE_URL + shortHash,
        });
    }));
});
exports.default = Short;
