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

export interface commentType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type startedPageType = {
  setStartedPost: React.Dispatch<React.SetStateAction<number>>;
};
