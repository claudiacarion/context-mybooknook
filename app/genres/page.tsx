import { genres } from "@/data/genres";
import Link from "next/link";

const Genres = () => {
  return (
    <>
      <h1 className="text-sage-dark font-heading text-[32px] text-center p-4">
        Explore a Genre
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
        {genres.map((genre, index) => (
          <div key={index}>
            <Link href={`/genres/${genre.value}`}>
              <p className="cursor-pointer text-ink bg-pink rounded rounded-br-3xl text-center py-4 my-4 md:my-0">{genre.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Genres;
