import { UserType } from "../types/types";

export const users: UserType[] = [
  { username: "rob", password: "ert", genre: null, books: [] },
  { username: "jane", password: "austen", genre: null, books: [] },
  {
    username: "mary",
    password: "shelley",
    genre: "Romance",
    books: [
      {
        id: "OL450063W",
        title: "Frankenstein; or, The Modern Prometheus",
        author: ["Mary Shelley"],
        cover: "https://covers.openlibrary.org/b/id/12356249-M.jpg",
      },
    ],
  },
];
