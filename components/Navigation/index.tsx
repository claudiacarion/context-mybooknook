"use client";

import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/data/types";
import Link from "next/link";

const Navigation = () => {
  const { setUser } = useUserContext() as UserContextType;

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <nav className=" text-sage-mid text-[16px] p-4 justify-center flex gap-4 md:gap-12 sticky top-0 z-50">
      <Link href="/" className="cursor-pointer hover:scale-95 z-10 relative">
        Home
      </Link>
      <Link href="/genres" className="cursor-pointer hover:scale-95 z-10 relative">
        Genres
      </Link>
      <Link href="/authors" className="cursor-pointer hover:scale-95 z-10 relative">
        Authors
      </Link>
      <Link href="/favorites" className="cursor-pointer hover:scale-95 z-10 relative">
        Favorites
      </Link>
      <p onClick={handleClick} className="cursor-pointer hover:scale-95 z-10 relative">
        Log Out
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[-8] md:top-[-60] lg:top-[-100] xl:top-[-150] 2xl:top-[-230] left-0 w-full rotate-180 z-0">
        <path
          fill="#DDE1CF"
          fillOpacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,96C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </nav>
  );
};

export default Navigation;
