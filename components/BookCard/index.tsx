import { BookCardType } from "@/data/types";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ id, title, author, cover }: BookCardType) => {
  return (
    <div className="bg-pink rounded rounded-br-3xl text-center p-4 my-8 mx-auto w-90 md:w-75 h-90 hover:scale-99">
      <Link href={`/book/${id}`}>
        <h3 className="text-sage-mid font-heading text-[20px] h-14 line-clamp-2">{title.toUpperCase()}</h3>
        <h4 className='text-ink text-[16px] line-clamp-1'>By {Array.isArray(author) ? author.join(", ") : author}</h4>
        <Image src={cover} alt={title} width={150} height={220} className="w-37.5 h-55 object-cover m-auto rounded" />
      </Link>
    </div>
  );
};

export default BookCard;
