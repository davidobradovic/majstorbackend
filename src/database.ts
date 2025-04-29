import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('workerapp', 'newuser', 'newpassword', {
  host: 'localhost',
  dialect: 'mysql',
});
