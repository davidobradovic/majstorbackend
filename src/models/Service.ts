import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Service extends Model {}

Service.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  categoryId: { type: DataTypes.INTEGER, allowNull: true },
  subcategoryId: { type: DataTypes.INTEGER, allowNull: true },
  workerId: { type: DataTypes.INTEGER, allowNull: true },
  description: { type: DataTypes.TEXT('long'), allowNull: true },
  basePrice: { type: DataTypes.DECIMAL(10,2), allowNull: true },
  isAvailable: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 },
  createdAt: { type: DataTypes.DATE, allowNull: true },
}, { sequelize, tableName: 'service' });
