"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    content: String,
    type: String
});
exports.default = mongoose_1.model('Message', messageSchema);
//# sourceMappingURL=Message.js.map