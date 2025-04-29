import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Order extends Model {}

Order.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  customerId: { type: DataTypes.INTEGER, allowNull: true },
  workerId: { type: DataTypes.INTEGER, allowNull: true },
  location: { type: DataTypes.INTEGER, allowNull: true },
  phoneNumber: { type: DataTypes.TEXT('long'), allowNull: true },
  phoneLocation: { type: DataTypes.TEXT('long'), allowNull: true },
  orderType: { type: DataTypes.ENUM('online', 'sms'), allowNull: true, defaultValue: 'online' },
  description: { type: DataTypes.TEXT('long'), allowNull: true },
  notes: { type: DataTypes.TEXT('long'), allowNull: true },
  paid: { type: DataTypes.TINYINT, allowNull: true },
  paidType: { type: DataTypes.ENUM('online', 'card', 'cash'), allowNull: true },
  status: { type: DataTypes.ENUM('requested', 'accepted', 'rejected', 'cancelled', 'inProgress', 'completed'), allowNull: true, defaultValue: 'requested' },
  dueDate: { type: DataTypes.DATE, allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: true },
}, { sequelize, tableName: 'order' });
