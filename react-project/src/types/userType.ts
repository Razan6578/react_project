export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  comments: Comment[]//масив id коментів
}
