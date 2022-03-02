export type User = {
  id: string;
  username: string;
  token: string;
};

export type Book = {
  title: string | number;
  author: string;
  coverImageUrl: string;
  id: string;
  pageCount: number;
  publisher: string;
  synopsis: string;
};
