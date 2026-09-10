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
    <div className='my-8'>
      <h2 className='text-peach font-heading text-[24px]'>Favorite Genre</h2>
      <select value={user!.genre?? ""} onChange={handleChange} className='text-ink w-full rounded rounded-br-2xl md:w-55 bg-sage-light p-2'>
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

export default GenreSelector
