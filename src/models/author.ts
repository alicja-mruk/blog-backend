import mongoose from 'mongoose';
import { Entity } from 'src/types';
import { IAuthor } from 'src/types/author';

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
});

const AuthorModel = mongoose.model<Entity<IAuthor> & mongoose.Document>(
  'author',
  authorSchema,
);

export { AuthorModel, authorSchema };
    
export default AuthorModel;