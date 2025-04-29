import { RequestHandler, Router } from 'express';
import {
  getWorkerProfiles,
  createWorkerProfile,
  updateWorkerProfile,
  deleteWorkerProfile
} from '../controllers/WorkerProfileController';

const router = Router();

router.get('/', getWorkerProfiles as RequestHandler);
router.post('/', createWorkerProfile as RequestHandler);
router.put('/:id', updateWorkerProfile as RequestHandler);
router.delete('/:id', deleteWorkerProfile as RequestHandler);

export default router;
