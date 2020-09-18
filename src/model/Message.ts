import { Schema, model, Document } from "mongoose";

const messageSchema =  new Schema({
    content: String,
    type: String
});

export interface IMessage extends Document  {
    content: string;
    type: string;
}

export default model<IMessage>('Message', messageSchema);