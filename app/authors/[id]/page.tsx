import { DetailedAuthorType } from "@/data/types";
import Image from "next/image";

const AuthorPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  let author: DetailedAuthorType | undefined;

  try {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/authors/${id}.json`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch book: ${response.status}`);
    }
    const data = await response.json();
    author = data;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {author ? (
        <>
          <h1 className="text-sage-dark text-center font-heading text-[32px] p-4 md:w-1/2 mx-auto">{author.name}</h1>
          <div className="p-4 flex flex-col gap-4 my-8 w-85 md:w-full bg-cream rounded rounded-br-3xl shadow-[4px_4px_0px_rgba(0,0,0,0.12)]">
            <Image
              src={author.photos ? `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/a/olid/${id}-M.jpg` : "/no-image.png"}
              alt={author.name}
              width={240}
              height={360}
              className="w-60 h-90 object-cover m-auto rounded"
            />
            {author.birth_date && <p>Born: {author.birth_date}</p>}
            {author.death_date && <p>Died: {author.death_date}</p>}
            {author.bio && (
              <p className="wrap-break-word">{typeof author.bio === "string" ? author.bio : author.bio?.value}</p>
            )}
          </div>
        </>
      ) : (
        <p className="font-heading text-sage-dark text-center text-[32px] p-4 md:w-1/2 mx-auto mt-8">
          Hmm, looks like this author has gone out for a walk.
        </p>
      )}
    </>
  );
};

export default AuthorPage;
