"use client";

import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/data/types";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

const Navigation = () => {
  const { setUser } = useUserContext() as UserContextType;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" text-sage-mid text-[18px] sticky top-0 z-50">
      <div className="hidden justify-center items-center gap-4 mt-3 md:flex md:gap-12">
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
        <button onClick={handleLogout} className="cursor-pointer hover:scale-95 z-10 relative">
          Log Out
        </button>
      </div>

      <div ref={ref} className="relative md:hidden">
        <div className="w-full bg-sage-light pt-5">
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 mx-auto w-full md:hidden">
            {isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
          </button>
        </div>
        <div
          className={`
          absolute
          right-0
          top-11
          z-20
          flex
          flex-col
          gap-4
          w-full
          overflow-hidden
          rounded-lg
          bg-sage-light
          text-[16px]
          pt-4
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 translate-y-0 " : "pointer-events-none max-h-0 -translate-y-2"}
        `}>
          <Link href="/" className="relative z-10 cursor-pointer text-center hover:scale-95" onClick={handleOpenMenu}>
            Home
          </Link>
          <Link
            href="/genres"
            className="relative z-10 cursor-pointer text-center hover:scale-95"
            onClick={handleOpenMenu}>
            Genres
          </Link>
          <Link
            href="/authors"
            className="relative z-10 cursor-pointer text-center hover:scale-95"
            onClick={handleOpenMenu}>
            Authors
          </Link>
          <Link
            href="/favorites"
            className="relative z-10 cursor-pointer text-center hover:scale-95"
            onClick={handleOpenMenu}>
            Favorites
          </Link>

          <button onClick={handleLogout} className="relative z-10 cursor-pointer hover:scale-95">
            Log Out
          </button>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`
        absolute
        left-0
        w-full
        rotate-180
        z-0
        transition-all duration-200 ease-in-out
        ${isOpen ? "top-50" : "-top-2 md:-top-15 lg:-top-25 xl:-top-37.5 2xl:-top-57.5"}`}>
        <path
          fill="#DDE1CF"
          fillOpacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,96C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </nav>
  );
};

export default Navigation;
