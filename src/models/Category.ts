import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Subcategory } from './Subcategory';

export interface CategoryAttributes {
  id?: number;
  title: string;
  icon?: string;
  createdAt?: Date;
  createdBy?: number;
}

export class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number;
  public title!: string;
  public icon?: string;
  public createdAt?: Date;
  public createdBy?: number;
}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  sequelize,
  tableName: 'category',
  timestamps: false,
});
