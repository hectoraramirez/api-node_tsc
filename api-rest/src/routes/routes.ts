import {Router} from 'express';
import { showMessages, saveMessage, updMessage, deleteMessage } from '../controllers/Message.controller'

const router: Router = Router();

router.route('/messages').get(showMessages);
router.route('/savemessages').post(saveMessage);
router.route('/updmessages/:id').post(updMessage);
router.route('/dltmessages/:id').delete(deleteMessage);

export default router;