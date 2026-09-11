"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/contexts/userContext";
import { genres } from "@/data/genres";
import AuthorCard from "@/components/AuthorCard";
import { AuthorCardType, UserContextType } from "@/types/types";

type Author = {
  key: string;
  name: string;
};

type Book = {
  authors?: Author[];
};

const Authors = () => {
  const { user } = useUserContext() as UserContextType;
  const [authors, setAuthors] = useState<AuthorCardType[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAuthors = async () => {
      const selectedGenre = user?.genre || genres[Math.floor(Math.random() * genres.length)].value;
      setSelectedGenre(selectedGenre);

      try {
        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/subjects/${selectedGenre}.json`;
        const response = await fetch(url);
        const data = await response.json();
        const authors = data.works
          .map((book: Book) => book.authors?.[0])
          .filter((author: Author) => author !== undefined);
        const noRepeatAuthors = authors.filter(
          (author: Author, index: number) => index === authors.findIndex((item: Author) => item.key === author.key),
        );
        const shuffledAuthors = noRepeatAuthors.sort(() => Math.random() - 0.5);
        const authorsToDisplay = shuffledAuthors.slice(0, 12);
        const authorCards: AuthorCardType[] = await Promise.all(
          authorsToDisplay.map(async (author: Author) => {
            const id = author.key.replace("/authors/", "");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${author.key}.json`);
            const fetchedAuthorData = await response.json();

            return {
              id: id,
              name: author.name,
              photo: fetchedAuthorData.photos
                ? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/a/olid/${id}-M.jpg`
                : "/no-image.png",
            };
          }),
        );
        setAuthors(authorCards);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAuthors();
  }, [user]);

  const displayGenre = selectedGenre
    .replace("childrens", "children's")
    .replaceAll("_", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <h1 className="text-sage-dark font-heading text-[32px] text-center p-4">
        {displayGenre.charAt(0).toUpperCase() + displayGenre.slice(1)} Authors
      </h1>
      {loading ? (
        <h4 className="text-peach font-heading text-[24px] px-6 my-8 lg:w-1/2 text-center mx-auto">
          Let&apos;s see what&apos;s in store for you...
        </h4>
      ) : displayGenre && authors.length > 0 ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-8 my-8">
          {authors.map(author => (
            <AuthorCard key={author.id} {...author} />
          ))}
        </div>
      ) : (
        <h4 className="text-peach font-heading text-[24px] px-6 my-8 lg:w-1/2 text-center mx-auto">
          Hmm... looks like our bookshelf is empty at the moment. Try again later.
        </h4>
      )}
    </>
  );
};

export default Authors;
