import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class WorkerProfile extends Model {}

WorkerProfile.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  description: { type: DataTypes.TEXT('long'), allowNull: true },
  status: { type: DataTypes.ENUM('active', 'inactive', 'banned'), allowNull: true },
  verificationStatus: { type: DataTypes.ENUM('confirmed', 'failed'), allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: true },
}, { sequelize, tableName: 'workerProfile' });
