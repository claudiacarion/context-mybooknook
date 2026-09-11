"use client";
import { useUserContext } from "@/contexts/userContext";
import { BookCardType, UserContextType } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const SaveButton = ({ id, title, author, cover }: BookCardType) => {
  const { user, setUser } = useUserContext() as UserContextType;

  const handleClick = () => {
    const book: BookCardType = { id, title, author, cover };
    const saved = user!.books.find(book => (book.id === id ? true : false));
    if (saved) {
      setUser({ ...user!, books: [...user!.books.filter(saved => saved.id !== book.id)] });
    } else {
      setUser({ ...user!, books: [...user!.books, book] });
    }
  };

  return (
    <button onClick={handleClick} className="my-2 mx-auto w-full">
      {user && user.books.find(book => book.id === id) ? (
        <FontAwesomeIcon icon={faHeart} className="text-pink text-[28px] hover:scale-95 cursor-pointer" />
      ) : (
        <FontAwesomeIcon icon={faHeartRegular} className="text-peach text-[28px] hover:scale-95 cursor-pointer" />
      )}
    </button>
  );
};

export default SaveButton;
