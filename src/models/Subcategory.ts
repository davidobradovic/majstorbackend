import { sequelize } from './../database';
import { Model, DataTypes } from 'sequelize';
import { Category } from './Category';

export class Subcategory extends Model {}

Subcategory.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  categoryId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING(45), allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: true },
  createdBy: { type: DataTypes.INTEGER, allowNull: true },
}, { sequelize, tableName: 'subcategory' });
