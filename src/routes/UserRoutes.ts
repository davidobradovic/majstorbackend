import { RequestHandler, Router } from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  register,
  login
} from '../controllers/UserController';
import { upload } from '../middleware/upload';

const router = Router();

router.get('/', getUsers as RequestHandler);
router.post('/', createUser as RequestHandler);
router.get('/:id', getUserById as RequestHandler);
router.put('/:id', updateUser as RequestHandler);
router.delete('/:id', deleteUser as RequestHandler);

router.post("/register", upload.single("image"), register as RequestHandler);
router.post("/login", login as RequestHandler);

export default router;
