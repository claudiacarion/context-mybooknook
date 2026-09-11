import Image from "next/image";
import { DetailedBookType } from "@/data/types";
import SaveButton from "@/components/SaveButton";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  let book: DetailedBookType | undefined;
  let authors: string[] = [];

  try {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/works/${id}.json`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch book: ${response.status}`);
    }
    const data: DetailedBookType = await response.json();
    book = data;
    const fetchedAuthors = await Promise.all(
      data.authors?.map(author => fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${author.author.key}.json`)) ?? [],
    );
    const authorData = await Promise.all(fetchedAuthors.map(res => res.json()));
    const noRepeatAuthors = authorData.filter(
      (author, index) => index === authorData.findIndex(item => item.name === author.name),
    );
    authors = noRepeatAuthors.map(author => author.name);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {book ? (
        <>
          <h1 className="text-sage-dark text-center font-heading text-[32px] p-4 md:w-1/2 mx-auto">{book.title}</h1>
          <SaveButton
            id={id}
            title={book.title}
            author={authors}
            cover={book.covers?.[0] ? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/b/id/${book.covers[0]}-M.jpg` : "/no-image.png"}
          />
          <div className="p-4 flex flex-col gap-4 my-8 w-85 md:w-full bg-cream rounded rounded-br-3xl shadow-[4px_4px_0px_rgba(0,0,0,0.12)]">
            <Image
              src={book.covers?.[0] && book.covers?.[0] !== -1? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/b/id/${book.covers[0]}-L.jpg` : book.covers?.[0] && book.covers?.[0] === -1? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/b/id/${book.covers[1]}-L.jpg` : "/no-image.png"}
              alt={book.title}
              width={240}
              height={360}
              className="w-60 h-90 object-cover m-auto rounded"
            />
            {authors.length > 0 && (
              <div>
                <h3 className="text-peach font-heading text-[18px]">Author(s)</h3>
                {authors.map(author => (
                  <p key={author}>{author}</p>
                ))}
              </div>
            )}
            {book.first_publish_date && <p>First published: {book.first_publish_date}</p>}
            {book.description && (
              <p>{typeof book.description === "string" ? book.description : book.description.value}</p>
            )}
            {book.subjects && (
              <div>
                <h3 className="text-peach font-heading text-[18px]">Subjects</h3>
                {book.subjects.slice(0, 3).map(subject => (
                  <p key={subject}>{subject}</p>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <p className="font-heading text-sage-dark text-center text-[32px] p-4 md:w-1/2 mx-auto mt-8">
          Sorry, someone is reading this one at the moment.
        </p>
      )}
    </>
  );
};

export default BookPage;
