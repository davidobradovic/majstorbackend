import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class ChannelUser extends Model {}

ChannelUser.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
}, { sequelize, tableName: 'channelUser' });
