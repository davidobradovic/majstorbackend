// routes/subcategory.routes.ts
import express, { RequestHandler } from 'express';
import * as SubcategoryController from '../controllers/SubcategoryController';

const router = express.Router();

router.post('/', SubcategoryController.createSubcategory as RequestHandler);
router.get('/', SubcategoryController.getSubcategories as RequestHandler);
router.put('/:id', SubcategoryController.updateSubcategory as RequestHandler);
router.delete('/:id', SubcategoryController.deleteSubcategory as RequestHandler);

export default router;