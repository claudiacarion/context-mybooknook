"use client";
import BookCard from "@/components/BookCard";
import GenreSelector from "@/components/GenreSelector";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/data/types";

const FavoritesPage = () => {
  const { user } = useUserContext() as UserContextType;

  return (
    <>
      <h1 className="text-sage-dark font-heading text-[32px] text-center p-4 mb-2">Your Favorites</h1>
      <GenreSelector />
      <div>
        <h3 className="text-peach font-heading text-[24px]">Favorite Books</h3>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user?.books &&
            user.books.map((book, index) => (
              <BookCard key={index} id={book.id} title={book.title} author={book.author} cover={book.cover} />
            ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
