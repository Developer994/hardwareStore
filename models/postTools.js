import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  brand: { type: String, required: true },
  itemName: { type: String, required: true },
  price: { type: String },
  image: { type: ObjectId },
});

// const PostTool = mongoose.model('PostTool', postSchema);

export default mongoose.model('PostTool', postSchema);
