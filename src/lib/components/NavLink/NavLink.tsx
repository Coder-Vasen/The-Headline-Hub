type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <a
      href={`/news/${category}`}
      className={`navlink dark:text-slate-200 hover:text-white ${
        isActive &&
        "underline  decoration-orange-400 underline-offset-4 font-bold text-lg"
      } `}
    >
      {category}
    </a>
  );
}

export default NavLink;
