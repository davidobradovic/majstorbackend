import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Message extends Model {}

Message.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  channelId: { type: DataTypes.INTEGER, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  content: { type: DataTypes.TEXT('long'), allowNull: true },
}, { sequelize, tableName: 'message' });
