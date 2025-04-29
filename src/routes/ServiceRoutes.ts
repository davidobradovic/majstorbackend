import { RequestHandler, Router } from 'express';
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/ServiceController';

const router = Router();

router.get('/', getServices as RequestHandler);
router.post('/', createService as RequestHandler);
router.put('/:id', updateService as RequestHandler);
router.delete('/:id', deleteService as RequestHandler);

export default router;
