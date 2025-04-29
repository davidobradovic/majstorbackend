import { RequestHandler, Router } from 'express';
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
  getOrderByUserId,
  getOrderByWorkerId
} from '../controllers/OrderController';

const router = Router();

router.get('/', getOrders as RequestHandler);
router.post('/', createOrder as RequestHandler);

router.get('/:id', getOrderById as RequestHandler);
router.get('/customer/:id', getOrderByUserId as RequestHandler);
router.get('/worker/:id', getOrderByWorkerId as RequestHandler);

router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
