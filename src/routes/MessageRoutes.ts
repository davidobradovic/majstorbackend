// routes/subcategory.routes.ts
import express, { RequestHandler } from 'express';
import * as MessageController from '../controllers/MessageController';

const router = express.Router();

router.post('/', MessageController.createMessage as RequestHandler);
router.get('/', MessageController.getMessages as RequestHandler);
router.put('/:id', MessageController.updateMessage as RequestHandler);
router.delete('/:id', MessageController.deleteMessage as RequestHandler);

export default router;