"use client";
import { useUserContext } from "@/contexts/userContext";
import { useEffect, useState } from "react";
import { BookCardType, UserContextType } from "@/data/types";
import { genres } from "@/data/genres";
import BookCard from "@/components/BookCard";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [book, setBook] = useState<BookCardType | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  const fetchRandomBook = async () => {
    const genre = user!.genre ? user!.genre : genres[Math.floor(Math.random() * genres.length)].value;
    setSelectedGenre(genre);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/search.json?subject=${genre}`;
      const response = await fetch(url);
      const data = await response.json();
      const fetchedBook = data.docs[Math.floor(Math.random() * data.docs.length)];
      const bookForCard: BookCardType = {
        id: fetchedBook.key.replace("/works/", ""),
        title: fetchedBook.title,
        author: fetchedBook.author_name ?? ["Unknown"],
        cover: fetchedBook.cover_i
          ? `https://covers.openlibrary.org/b/id/${fetchedBook.cover_i}-M.jpg`
          : "/no-image.png",
      };
      setBook(bookForCard);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchRandomBook();
  }, [user]);

  const displayGenre = selectedGenre
    .replace("childrens", "children's")
    .replaceAll("_", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="text-center">
      {user && (
        <div className="p-4 mb-8">
          <h1 className="text-sage-dark font-heading text-[32px]">
            Hi {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!
          </h1>
          <h3 className="text-ink">Ready for new read?</h3>
        </div>
      )}
      <h4 className="text-peach font-heading text-[24px] px-6">How about this one from the {displayGenre} collection?</h4>
      {book && <BookCard {...book} />}
    </div>
  );
}
