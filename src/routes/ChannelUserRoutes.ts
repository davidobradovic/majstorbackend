import { RequestHandler, Router } from 'express';
import {
  getChannelUsers,
  createChannelUser,
  updateChannelUser,
  deleteChannelUser
} from '../controllers/ChannelUserController';

const router = Router();

router.get('/', getChannelUsers as RequestHandler);
router.post('/', createChannelUser as RequestHandler);
router.put('/:id', updateChannelUser as RequestHandler);
router.delete('/:id', deleteChannelUser as RequestHandler);

export default router;
