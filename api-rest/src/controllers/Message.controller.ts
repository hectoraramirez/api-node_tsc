import {Request, Response} from 'express';
import msg from '../model/Message';

/**
 * servicio para mostrar todos los mensajes
 * @param req 
 * @param res 
 */
export async function showMessages( req:Request, res: Response): Promise<Response>{
    const msgs = await msg.find().sort({_id:-1});
    return res.json(msgs);
}

/**
 * Servicio para guardar los mensajes
 * @param req 
 * @param res 
 */
export async function saveMessage( req:Request, res: Response): Promise<Response>{
    const {content, type} = req.body;
    const msgSave = {content: content, type: type}
    const msgsave = new msg(msgSave);
    await msgsave.save();
    return res.json(
        {
            status: res.status,
            message: 'Post guardado correctamente',
            msgsave
        }
    );
}

/**
 * servicio para editar el contenido del post
 * @param req 
 * @param res 
 */
export async function updMessage( req:Request, res: Response): Promise<Response>{
    
    const { id } = req.params;
    const {content, type} = req.body;
    const updmsg = await msg.findByIdAndUpdate( id, {content:content, type:type}, {new:true});
    console.log(updmsg);
    
    return res.json({
        message:'El mensaje se ha sido actualizada',
        updmsg
    });
}

/**
 * Servicio para eliminar los mensajes
 * @param req 
 * @param res 
 */
export async function deleteMessage( req:Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const msgdel = await msg.findByIdAndRemove(id);

    if(msgdel){
       await msgdel.remove();
    } 

    return res.json({
        message:'La imagen ha sido eliminada',
        msgdel
    });
}
