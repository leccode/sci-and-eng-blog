import { DiAtom } from "react-icons/di";
import { FcEngineering } from "react-icons/fc";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput";
import Notifications from "./Notifications";
import UserButton from "./UserButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 border-b z-50 bg-white dark:bg-slate-950">
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="https://en.wikipedia.org/wiki/Science" target="_blank">
              <DiAtom size={24} />
            </Link>
            <Link href="/">
              <div className="font-bold text-xl">SCI&ENG.blog</div>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Engineering"
              target="_blank"
            >
              <FcEngineering size={24} />
            </Link>
          </div>
          <SearchInput />
          <div className="flex items-center gap-5 sm:gap-8">
            <ThemeToggle />
            <Notifications />
            <UserButton />
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
