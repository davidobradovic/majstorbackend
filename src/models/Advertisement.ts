import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Advertisement extends Model {}

Advertisement.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  creatorId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  city: { type: DataTypes.STRING(255), allowNull: true },
  isAvailable: { type: DataTypes.BOOLEAN, allowNull: true },
}, {
  sequelize,
  tableName: 'advertisement',
  timestamps: false,
});
