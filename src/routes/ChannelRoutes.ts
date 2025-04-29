import { RequestHandler, Router } from 'express';
import {
  getChannels,
  createChannel,
  updateChannel,
  deleteChannel
} from '../controllers/ChannelController';

const router = Router();

router.get('/', getChannels as RequestHandler);
router.post('/', createChannel as RequestHandler);
router.put('/:id', updateChannel as RequestHandler);
router.delete('/:id', deleteChannel as RequestHandler);

export default router;
