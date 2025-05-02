import { RequestHandler, Router } from 'express';
import { createAdvertisement, deleteAdvertisement, getAdvertisements, updateAdvertisement } from '../controllers/Advertisement';


const router = Router();

router.get('/', getAdvertisements as RequestHandler);
router.post('/', createAdvertisement as RequestHandler);
router.put('/:id', updateAdvertisement as RequestHandler);
router.delete('/:id', deleteAdvertisement as RequestHandler);

export default router;
