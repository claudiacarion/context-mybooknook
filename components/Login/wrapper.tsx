"use client";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/data/types";
import { ReactNode } from "react";
import LogIn from ".";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";

const LoginWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType;
  return (
    <div className={`min-h-screen flex flex-col ${!user ? "bg-[url('/bg.jpeg')] bg-cover bg-position-[75%_center] md:bg-center" : ""}`}>
      {user ? (
        <>
          <Header />
          <Navigation />
          <div className="my-8 mx-auto grow w-fit md:w-4/5 xl:w-2/3">{children}</div>
          <Footer />
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );
};

export default LoginWrapper;
