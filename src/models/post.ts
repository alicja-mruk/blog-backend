import mongoose from 'mongoose';
import { Entity } from 'src/types';
import { IPost } from 'src/types/post';
import { authorSchema } from './author';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: authorSchema,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const PostModel = mongoose.model<Entity<IPost> & mongoose.Document>('post', postSchema);

export { PostModel };
export default PostModel;