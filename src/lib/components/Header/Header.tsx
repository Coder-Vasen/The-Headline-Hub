import { Bars3Icon } from "@heroicons/react/24/solid";
import NavLinks from "@/components/NavLinks/NavLinks";
import SearchBox from "@/components/SearchBox/SearchBox";
import DarkModeButton from "@/components/DarkButton/DarkButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 dark:text-white w-8 cursor-pointer" />
        <a href="/">
          <h1
            className="font-serif dark:text-slate-100 text-4xl text-center"
          >
            The{" "}
            <span
              className="underline 
            decoration-6 decoration-orange-400"
            >
              Headline
            </span>{" "}
            Hub
          </h1>
        </a>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <button
            className="hidden md:inline
           bg-slate-900 text-white px-4 
           lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
