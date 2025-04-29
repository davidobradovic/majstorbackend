import { User } from '../models/User';
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Image } from '../models/Image';

const JWT_SECRET = "MAJSTORAPP2025.DAVID";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, role, workerId, usedRefferal, refferal } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      workerId,
      usedRefferal,
      refferal,
    });

    const image = await Image.create({
      filename: imageFile.filename,
      path: imageFile.path,
      userId: user.id,
    });

    res.status(201).json({ user, image });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } }) as User;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (!user.password) {
      return res.status(500).json({ message: 'User has no password stored' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, role, workerId, usedRefferal, refferal } = req.body;
    const user = await User.create({ fullName, email, password, role, workerId, usedRefferal, refferal });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await User.findByPk(id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fullName, email, password, role } = req.body;
    const user = await User.update({ fullName, email, password, role }, { where: { id } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
