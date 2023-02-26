import { IAuthor } from './author';

export interface IPost {
  author: IAuthor;
  email: string;
  password: string;
}
