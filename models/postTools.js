import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  brand: { type: String, required: true },
  itemName: { type: String, required: true },
  itemNumber: { type: String },
  topItem: {
    type: Boolean,
  },
  price: { type: String },
  image: { type: String },
  // image: { type: ObjectId, required: true },
});

// const PostTool = mongoose.model('PostTool', postSchema);

export default mongoose.model('PostTool', postSchema);
