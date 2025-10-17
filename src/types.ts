export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AuthorType {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}
