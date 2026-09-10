"use client";

import { SavedUserType, UserContextType, UserType } from "@/data/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
    const savedUsername = localStorage.getItem("loggedInUser");

    if (savedUsername) {
      const savedUser = localStorage.getItem(`user-${savedUsername}`);

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const userToSave: SavedUserType = {
        username: user.username,
        genre: user.genre,
        books: user.books,
      };

      localStorage.setItem(`user-${user.username}`, JSON.stringify(userToSave));
    }
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
