import { sequelize } from '../database';
import { Category } from './Category';
import { Subcategory } from './Subcategory';

// 🛠 Setup relationships after both models are initialized
Category.hasMany(Subcategory, { foreignKey: 'categoryId', as: 'subcategories' });
Subcategory.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// Export for use
export { sequelize, Category, Subcategory };
