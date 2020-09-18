"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Message_controller_1 = require("../controllers/Message.controller");
const router = express_1.Router();
router.route('/messages').get(Message_controller_1.showMessages);
router.route('/savemessages').post(Message_controller_1.saveMessage);
router.route('/updmessages/:id').post(Message_controller_1.updMessage);
router.route('/dltmessages/:id').delete(Message_controller_1.deleteMessage);
exports.default = router;
//# sourceMappingURL=routes.js.map