import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Image extends Model {}

Image.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  filename: { type: DataTypes.STRING, allowNull: true },
  path: { type: DataTypes.STRING, allowNull: true },
  type: { type: DataTypes.ENUM('banner', 'avatar', 'image'), allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  profileId: { type: DataTypes.INTEGER, allowNull: true },
  documentId: { type: DataTypes.INTEGER, allowNull: true },
  orderId: { type: DataTypes.INTEGER, allowNull: true },
  messageId: { type: DataTypes.INTEGER, allowNull: true },
  serviceId: { type: DataTypes.INTEGER, allowNull: true },
  uploadedAt: { type: DataTypes.DATE, allowNull: true },
}, { sequelize, tableName: 'image' });
