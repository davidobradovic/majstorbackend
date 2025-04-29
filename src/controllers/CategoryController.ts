import { Request, RequestHandler, Response } from 'express';
import { Category } from '../models/Category';
import { Sequelize } from 'sequelize';
import { Subcategory } from '../models';
import fs from 'fs';
import path from 'path';

// export const getAllCategories = async (req: Request, res: Response) => {
//   const categories = await Category.findAll();
//   res.json(categories);
// };

// export const getAllCategories = async (req: Request, res: Response) => {
//   try {
//     // Fetch categories and include subcategory count
//     const categories = await Category.findAll({
//       attributes: {
//         // Include the subcategory count as a new field 'subcategoryCount'
//         include: [
//           [Sequelize.fn('COUNT', Sequelize.col('subcategories.id')), 'subcategoryCount'],
//         ],
//       },
//       include: [
//         {
//           model: Subcategory, // Include the 'Subcategory' model
//           as: 'subcategories', // This must match the alias in the association
//           attributes: [], // Don't return any attributes from the subcategories table
//         },
//       ],
//       group: ['Category.id'], // Group by category ID to get counts per category
//     });

//     res.json(categories);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Subcategory,
          as: 'subcategories', // This should match your association alias
          attributes: ['id', 'title'], // Adjust fields as needed
        },
      ],
    });

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// export const createCategory = async (req: Request, res: Response) => {
//   const { title, icon, createdBy } = req.body;
//   const category = await Category.create({ title, icon, createdBy });
//   res.status(201).json(category);
// };

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { title, createdBy } = req.body;
    const icon = req.file?.filename;

    if (!icon) {
      return res.status(400).json({ message: 'Icon image is required.' });
    }

    // Create category
    const category = await Category.create({ title, icon, createdBy });

    // Parse subcategories if provided
    const subcategoriesRaw = req.body.subcategories;
    if (subcategoriesRaw) {
      const subcategories = JSON.parse(subcategoriesRaw);

      for (const sub of subcategories) {
        await Subcategory.create({
          title: sub.title,
          categoryId: category.id, // associate with created category
        });
      }
    }

    res.status(201).json({ message: 'Category created', categoryId: category.id });
  } catch (error) {
    console.error("Create Category Error:", error);
    res.status(500).json({ message: 'Failed to create category', error });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categories = await Category.findByPk(id, {
      include: [
        {
          model: Subcategory,
          as: 'subcategories', // This should match your association alias
          attributes: ['id', 'title'], // Adjust fields as needed
        },
      ],
    });

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// export const updateCategory = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const category = await Category.findByPk(id);
//   if (!category) return res.status(404).json({ message: 'Category not found' });

//   await category.update(req.body);
//   res.json(category);
// };

// export const updateCategory = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { title } = req.body;
//     const icon = req.file?.filename;

//     // Find the category
//     const category = await Category.findByPk(id);
    
//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     // Update category details
//     const updateData: any = { title };
    
//     // Only update icon if a new one was uploaded
//     if (icon) {
//       // Delete old icon if it exists
//       if (category.icon) {
//         const fs = require('fs');
//         const path = require('path');
//         const oldIconPath = path.join(__dirname, '../../uploads', category.icon);
//         if (fs.existsSync(oldIconPath)) {
//           fs.unlinkSync(oldIconPath);
//         }
//       }
//       updateData.icon = icon;
//     }

//     // Update category
//     await category.update(updateData);

//     // Parse subcategories if provided
//     const subcategoriesRaw = req.body.subcategories;
//     if (subcategoriesRaw) {
//       const subcategories = JSON.parse(subcategoriesRaw);

//       // First, delete all existing subcategories
//       await Subcategory.destroy({
//         where: { categoryId: id }
//       });

//       // Then create new subcategories
//       for (const sub of subcategories) {
//         await Subcategory.create({
//           title: sub.title,
//           categoryId: category.id,
//         });
//       }
//     }

//     res.status(200).json({ message: 'Category updated', categoryId: category.id });
//   } catch (error) {
//     console.error("Update Category Error:", error);
//     res.status(500).json({ message: 'Failed to update category', error });
//   }
// };

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, subcategories: subcategoriesRaw } = req.body;

    // Find the category
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Prepare data to update
    const updateData: any = { title };

    // Handle icon update if new icon is uploaded
    const icon = req.file?.filename;
    if (icon) {
      // Delete old icon if it exists
      if (category.icon) {
        const oldIconPath = path.join(__dirname, '../../uploads', category.icon);
        if (fs.existsSync(oldIconPath)) {
          fs.unlinkSync(oldIconPath);
        }
      }
      updateData.icon = icon; // Update icon only if new one is provided
    }

    // Update category
    await category.update(updateData);

    // Handle subcategories if provided
    if (subcategoriesRaw) {
      const subcategories = JSON.parse(subcategoriesRaw);

      // First, delete all existing subcategories
      await Subcategory.destroy({
        where: { categoryId: id }
      });

      // Then create new subcategories
      for (const sub of subcategories) {
        await Subcategory.create({
          title: sub.title,
          categoryId: category.id,
        });
      }
    }

    res.status(200).json({ message: 'Category updated', categoryId: category.id });
  } catch (error) {
    console.error("Update Category Error:", error);
    res.status(500).json({ message: 'Failed to update category', error });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  await category.destroy();
  res.json({ message: 'Category deleted' });
};
