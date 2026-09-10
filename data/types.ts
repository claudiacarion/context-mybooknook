export type UserType = {
  username: string;
  password: string;
  genre: string | null;
  books: BookCardType[];
};

export type BookCardType = {
  id: string;
  title: string;
  author: string[];
  cover: string;
};

export type GenreBookType = {
  key: string;
  title: string;
  authors?: {
    name: string;
  }[];
  cover_id?: string;
};

export type DetailedBookType = {
  title: string;
  description?: string | { value: string };
  covers?: number[];
  authors?: {
    author: {
      key: string;
    };
  }[];
  first_publish_date?: string;
  subjects?: string[];
};

export type AuthorCardType = {
  id: string;
  photo: string;
  name: string;
};

export type DetailedAuthorType = {
  photos: number[];
  name: string;
  birth_date: string;
  death_date: string;
  bio: string| { value: string };
};

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export type SavedUserType = {
  username: string;
  genre: string | null;
  books: BookCardType[];
};