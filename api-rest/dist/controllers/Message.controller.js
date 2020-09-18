"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updMessage = exports.saveMessage = exports.showMessages = void 0;
const Message_1 = __importDefault(require("../model/Message"));
/**
 * servicio para mostrar todos los mensajes
 * @param req
 * @param res
 */
async function showMessages(req, res) {
    const msgs = await Message_1.default.find().sort({ _id: -1 });
    return res.json(msgs);
}
exports.showMessages = showMessages;
/**
 * Servicio para guardar los mensajes
 * @param req
 * @param res
 */
async function saveMessage(req, res) {
    const { content, type } = req.body;
    const msgSave = { content: content, type: type };
    const msgsave = new Message_1.default(msgSave);
    await msgsave.save();
    return res.json({
        status: res.status,
        message: 'Post guardado correctamente',
        msgsave
    });
}
exports.saveMessage = saveMessage;
/**
 * servicio para editar el contenido del post
 * @param req
 * @param res
 */
async function updMessage(req, res) {
    const { id } = req.params;
    const { content, type } = req.body;
    const updmsg = await Message_1.default.findByIdAndUpdate(id, { content: content, type: type }, { new: true });
    console.log(updmsg);
    return res.json({
        message: 'El mensaje se ha sido actualizada',
        updmsg
    });
}
exports.updMessage = updMessage;
/**
 * Servicio para eliminar los mensajes
 * @param req
 * @param res
 */
async function deleteMessage(req, res) {
    const { id } = req.params;
    const msgdel = await Message_1.default.findByIdAndRemove(id);
    if (msgdel) {
        await msgdel.remove();
    }
    return res.json({
        message: 'La imagen ha sido eliminada',
        msgdel
    });
}
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=Message.controller.js.map