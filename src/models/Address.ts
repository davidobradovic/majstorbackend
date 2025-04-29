import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Address extends Model {}

Address.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  name: { type: DataTypes.STRING(255), allowNull: true },
  lat: { type: DataTypes.DECIMAL(10,5), allowNull: true },
  long: { type: DataTypes.DECIMAL(10,5), allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: true },
}, {
  sequelize,
  tableName: 'address',
  timestamps: false,
});
