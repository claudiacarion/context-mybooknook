import BookCard from "@/components/BookCard";
import { BookCardType, GenreBookType } from "@/data/types";

const GenrePage = async ({ params }: { params: { genre: string } }) => {
  const { genre } = await params;

  const subject = genre.toLowerCase().replaceAll(" ", "_");

  let books: BookCardType[] = [];

  try {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/subjects/${subject}.json`;
    const response = await fetch(url);
    const data: { works: GenreBookType[] } = await response.json();
    books = data.works.map(book => ({
      id: book.key.replace("/works/", ""),
      title: book.title,
      author: book.authors?.map(author => author.name) ?? ["Unknown"],
      cover: book.cover_id ? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/b/id/${book.cover_id}-M.jpg` : "/no-image.png",
    }));
  } catch (error) {
    console.log(error);
  }

  const displayGenre = genre
    .replace("childrens", "children's")
    .replaceAll("_", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <h1 className="text-sage-dark font-heading text-[32px] text-center p-4 mb-2">{displayGenre} Books</h1>
      {displayGenre && books.length > 0 ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {books.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : displayGenre && books.length === 0 ? (
        <h4 className="text-peach font-heading text-[24px] px-6 text-center">
          Hmm... looks like we don&apos;t have {displayGenre} books. Try another genre.
        </h4>
      ) : (
        <h4 className="text-peach font-heading text-[24px] px-6 text-center">
          Hmm... looks like our bookshelf is empty at the moment. Try again later.
        </h4>
      )}
    </>
  );
};

export default GenrePage;
