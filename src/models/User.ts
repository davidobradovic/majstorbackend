// import { Model, DataTypes } from 'sequelize';
// import {sequelize} from '../database';

// export class User extends Model {}

// User.init({
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   fullName: { type: DataTypes.STRING(45), allowNull: true },
//   email: { type: DataTypes.STRING(255), allowNull: true },
//   password: { type: DataTypes.STRING(255), allowNull: true },
//   role: { type: DataTypes.ENUM('user', 'worker'), allowNull: true },
//   workerId: { type: DataTypes.INTEGER, allowNull: true },
//   usedRefferal: { type: DataTypes.INTEGER, allowNull: true },
//   refferal: { type: DataTypes.INTEGER, allowNull: true },
//   bannedAt: { type: DataTypes.DATE, allowNull: true },
//   banReason: { type: DataTypes.TEXT('long'), allowNull: true },
//   bannedBy: { type: DataTypes.INTEGER, allowNull: true },
//   createdAt: { type: DataTypes.DATE, allowNull: true },
// }, { sequelize, tableName: 'user' });

// models/User.ts
import { Model, DataTypes, Optional } from 'sequelize';
import {sequelize} from '../database';

// Step 1: Define the attributes
interface UserAttributes {
  id: number;
  fullName: string | null;
  email: string | null;
  password: string | null;
  role: 'user' | 'worker' | null;
  workerId?: number | null;
  usedRefferal?: number | null;
  refferal?: number | null;
  bannedAt?: Date | null;
  banReason?: string | null;
  bannedBy?: number | null;
  createdAt?: Date | null;
}

// Step 2: Define creation attributes (if ID is auto-generated)
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

// Step 3: Define class
export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public fullName!: string | null;
  public email!: string | null;
  public password!: string | null;
  public role!: 'user' | 'worker' | null;
  public workerId!: number | null;
  public usedRefferal!: number | null;
  public refferal!: number | null;
  public bannedAt!: Date | null;
  public banReason!: string | null;
  public bannedBy!: number | null;
  public createdAt!: Date | null;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fullName: { type: DataTypes.STRING(45), allowNull: true },
    email: { type: DataTypes.STRING(255), allowNull: true },
    password: { type: DataTypes.STRING(255), allowNull: true },
    role: { type: DataTypes.ENUM('user', 'worker'), allowNull: true },
    workerId: { type: DataTypes.INTEGER, allowNull: true },
    usedRefferal: { type: DataTypes.INTEGER, allowNull: true },
    refferal: { type: DataTypes.INTEGER, allowNull: true },
    bannedAt: { type: DataTypes.DATE, allowNull: true },
    banReason: { type: DataTypes.TEXT('long'), allowNull: true },
    bannedBy: { type: DataTypes.INTEGER, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize,
    tableName: 'user',
  }
);
