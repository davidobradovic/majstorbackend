import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Document extends Model {}

Document.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  documentType: { type: DataTypes.ENUM('id', 'passport', 'driving_license'), allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: true },
}, { sequelize, tableName: 'document' });
