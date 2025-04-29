import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../database';

export class Banner extends Model {}

Banner.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: DataTypes.STRING(255), allowNull: false },
  expiringFor: { type: DataTypes.BIGINT, allowNull: true },
  expired: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, allowNull: true },
  createdBy: { type: DataTypes.INTEGER, allowNull: true },
}, { sequelize, tableName: 'banner' });
