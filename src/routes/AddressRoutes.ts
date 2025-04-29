import { RequestHandler, Router } from 'express';
import {
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress
} from '../controllers/AddressController';

const router = Router();

router.get('/', getAddresses as RequestHandler);
router.post('/', createAddress as RequestHandler);
router.put('/:id', updateAddress as RequestHandler);
router.delete('/:id', deleteAddress as RequestHandler);

export default router;
