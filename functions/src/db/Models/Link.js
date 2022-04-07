"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = void 0;
const mongoose_1 = require("mongoose");
const Links_1 = require("../Schemas/Links");
exports.LinkModel = (0, mongoose_1.model)('links', Links_1.LinksSchema);
