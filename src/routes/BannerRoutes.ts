import { RequestHandler, Router } from 'express';
import {
  getBanners,
  createBanner,
  updateBanner,
  deleteBanner
} from '../controllers/BannerController';

const router = Router();

router.get('/', getBanners as RequestHandler);
router.post('/', createBanner as RequestHandler);
router.put('/:id', updateBanner as RequestHandler);
router.delete('/:id', deleteBanner as RequestHandler);

export default router;
