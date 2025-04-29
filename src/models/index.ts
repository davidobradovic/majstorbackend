import { sequelize } from '../database';
import { Category } from './Category';
import { Image } from './Image';
import { Subcategory } from './Subcategory';
import { User } from './User';

// 🛠 Setup relationships after both models are initialized
Category.hasMany(Subcategory, { foreignKey: 'categoryId', as: 'subcategories' });
Subcategory.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

User.hasMany(Image, { foreignKey: 'userId', as: 'images' });
Image.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Export for use
export { sequelize, Category, Subcategory };
