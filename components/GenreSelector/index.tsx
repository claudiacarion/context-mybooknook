"use client";

import { genres } from "@/data/genres";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/data/types";

const GenreSelector = () => {
  const { user, setUser } = useUserContext() as UserContextType;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user!, genre: e.target.value });
  };

  return (
    <div className="my-8">
      <h2 className="text-peach font-heading text-[24px]">Favorite Genre</h2>
      <select
        value={user!.genre ?? ""}
        onChange={handleChange}
        className="text-ink
        w-full
        rounded
        rounded-br-2xl
        md:w-55
        bg-cream
        p-2
        shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
        hover:shadow-[6px_6px_0px_rgba(0,0,0,0.12)]
        hover:-translate-x-0.5
        hover:-translate-y-0.5
        transition-all
        duration-200">
        <option value="">No genre selected</option>
        {genres.map(genre => (
          <option key={genre.value} value={genre.value}>
            {genre.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreSelector;
