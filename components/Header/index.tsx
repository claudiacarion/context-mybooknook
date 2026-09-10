import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-sage-light flex gap-2 items-center px-8 pt-8 z-100">
      <Link href="/" className='relative z-10'>
        <Image src="/logo.png" alt="logo" width={80} height={80} className="cursor-pointer" />
      </Link>
      <div className='relative z-10'>
        <h2 className="text-sage-dark font-heading text-5xl">My BookNook</h2>
        <h4 className="text-peach">A Little Corner for Every Story</h4>
      </div>
    </header>
  );
};

export default Header;
