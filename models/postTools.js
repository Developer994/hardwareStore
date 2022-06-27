import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  brand: { type: String, required: true },
  toolName: { type: String, required: true },
});

const PostTool = mongoose.model('PostTool', postSchema);

export default mongoose.model('PostTool', postSchema);
