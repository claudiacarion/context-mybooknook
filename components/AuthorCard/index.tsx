import { AuthorCardType } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const AuthorCard = ({ id, photo, name }: AuthorCardType) => {
  return (
    <div
      className="bg-pink
    rounded
    rounded-br-3xl
    text-center
    p-4
    my-8
    mx-auto
    w-75
    h-75
    shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
    hover:shadow-[6px_6px_0px_rgba(0,0,0,0.12)]
    hover:-translate-x-0.5
    hover:-translate-y-0.5
    transition-all
    duration-200">
      <Link href={`/authors/${id}`}>
        <h3 className="text-ink">{name}</h3>
        <Image src={photo} alt={name} width={180} height={200} className="w-37.5 h-55 object-cover m-auto rounded" />
      </Link>
    </div>
  );
};

export default AuthorCard;
