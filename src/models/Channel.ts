import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database';

export class Channel extends Model {}

Channel.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
}, { sequelize, tableName: 'channel' });
