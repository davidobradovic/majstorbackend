import { RequestHandler, Router } from 'express';
import {
  getImages,
  createImage,
  updateImage,
  deleteImage,
} from '../controllers/ImageController';

const router = Router();

router.get('/', getImages as RequestHandler);
router.post('/', createImage as RequestHandler);
router.put('/:id', updateImage as RequestHandler);
router.delete('/:id', deleteImage as RequestHandler);

export default router;
