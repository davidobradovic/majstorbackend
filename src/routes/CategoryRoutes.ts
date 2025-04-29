import { Router, Request, Response, RequestHandler } from 'express';
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '../controllers/CategoryController';
import { upload } from '../middleware/upload';

// Definiši rutu sa ispravnim tipovima
const router = Router();

router.get('/', getAllCategories as RequestHandler); // Dodaj RequestHandler tip
router.post('/categories', upload.single('icon'), createCategory as RequestHandler);
router.get('/:id', getCategoryById as RequestHandler);
router.put('/:id', upload.single('icon'), updateCategory as RequestHandler);
router.delete('/:id', deleteCategory as RequestHandler);

export default router;
