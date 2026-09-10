import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-sage-light flex gap-2 items-center px-8 pt-8 z-100">
      <Link href="/" className='relative z-10 shrink-0'>
        <Image src="/logo.png" alt="logo" width={80} height={80} className="w-20 md:w-24 h-20 md:h-24 cursor-pointer" />
      </Link>
      <div className='relative z-10'>
        <h2 className="text-sage-dark font-heading text-[44px] md:text-[52px] leading-[0.9] md:leading-tight">My BookNook</h2>
        <h4 className="text-peach">A Little Corner for Every Story</h4>
      </div>
    </header>
  );
};

export default Header;
