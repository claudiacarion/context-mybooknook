import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";
import { SetStateAction, useState } from "react";
import { users } from "@/data/users";
import Image from "next/image";

const Login = () => {
  const { user, setUser } = useUserContext() as UserContextType;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loggedInUser = users.find(item => item.username === username && item.password === password);
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", loggedInUser.username);
      const savedUser = localStorage.getItem(`user-${username}`);

      if (savedUser) {
        const savedData = JSON.parse(savedUser);

        setUser({
          ...loggedInUser,
          ...savedData,
        });
      } else {
        setUser(loggedInUser);
      }
      setError("");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="m-auto">
      <form
        className="bg-sage-light text-center w-80 md:w-100 h-118 p-6 m-auto rounded rounded-br-3xl shadow-[6px_6px_0px_rgba(0,0,0,0.12)]"
        onSubmit={handleLogin}>
        <Image src="/logo.png" alt="logo" width={80} height={80} className="w-24 h-24 m-auto" />
        <h2 className="text-sage-dark font-heading text-[36px] md:text-[44px] leading-[0.9] md:leading-tight">
          My BookNook
        </h2>
        <h4 className="text-peach text-[16px] md:text-[18px]">A Little Corner for Every Story</h4>
        <label className="field text-ink" htmlFor="username">
          Username:
        </label>
        <input
          className="field
          bg-cream
          w-full
          p-2
          rounded
          rounded-br-3xl
          shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
          hover:shadow-[6px_6px_0px_rgba(0,0,0,0.12)]
          hover:-translate-x-0.5
          hover:-translate-y-0.5
          transition-all
          duration-200"
          id="username"
          placeholder="Enter your username"
          onChange={handleUsername}
          value={username}
        />
        <label className="field text-ink" htmlFor="password">
          Password:
        </label>
        <input
          className="field
        bg-cream
          w-full
          p-2
          rounded
          rounded-br-3xl
          shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
          hover:shadow-[6px_6px_0px_rgba(0,0,0,0.12)]
          hover:-translate-x-0.5
          hover:-translate-y-0.5
          transition-all
          duration-200"
          id="password"
          placeholder="Enter your password"
          type="password"
          onChange={handlePassword}
          value={password}
        />
        <button className="bg-pink text-[14px] px-2 py-1 mb-1 rounded-2xl cursor-pointer hover:scale-95 shadow-[4px_4px_0px_rgba(0,0,0,0.12)]">
          Log in
        </button>
        {error && <p className="text-sm text-peach">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
