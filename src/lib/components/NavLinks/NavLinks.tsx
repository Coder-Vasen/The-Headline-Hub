import { categories } from "@/utils/constants";

import NavLink from "@/components/NavLink/NavLink";

function NavLinks() {
  const pathname = window.location.pathname;

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav
      className="grid grid-cols-4 md:grid-cols-7 
    text-cs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b"
    >
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
