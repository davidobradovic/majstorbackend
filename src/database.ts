import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('workerapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
