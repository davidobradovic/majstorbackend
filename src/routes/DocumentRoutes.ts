import { RequestHandler, Router } from 'express';
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument
} from '../controllers/DocumentController';

const router = Router();

router.get('/', getDocuments as RequestHandler);
router.post('/', createDocument as RequestHandler);
router.put('/:id', updateDocument as RequestHandler);
router.delete('/:id', deleteDocument as RequestHandler);

export default router;
