import express from 'express';

import addressRoutes from './routes/AddressRoutes';
import bannerRoutes from './routes/BannerRoutes';
import categoryRoutes from './routes/CategoryRoutes';

import channelRoutes from './routes/ChannelRoutes';
import channelUserRoutes from './routes/ChannelUserRoutes';
import documentRoutes from './routes/DocumentRoutes';
import imageRoutes from './routes/ImageRoutes';
import messageRoutes from './routes/MessageRoutes';
import orderRoutes from './routes/OrderRoutes';
import serviceRoutes from './routes/ServiceRoutes';
import subcategoryRoutes from './routes/SubcategoryRoutes';
import userRoutes from './routes/UserRoutes';
import workerProfileRoutes from './routes/WorkerProfileService';
import advertisementRouter from './routes/AdverstisementRoutes'
import { sequelize } from './database';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use('/api/address', addressRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/channel', channelRoutes);
app.use('/api/channel-users', channelUserRoutes);
app.use('/api/document', documentRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/user', userRoutes);
app.use('/api/worker-profile', workerProfileRoutes);
app.use('/api/advertisement', advertisementRouter)

app.listen(5000, async () => {
  try {
    await sequelize.authenticate();
    console.log('Povezano sa bazom!');
  } catch (error) {
    console.error('Greska sa bazom:', error);
  }
  console.log(`Server radi na http://localhost:5000`);
});