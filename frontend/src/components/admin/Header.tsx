import { Link } from "react-router-dom";

type TNavBarLinks = {
  path: string;
  name: string;
};

const Header = () => {
  const navBarLinks: TNavBarLinks[] = [
    { name: "Messages", path: "#messages" },
  ];

  const renderNavBarLinks = navBarLinks.map((e) => (
    <>
      <li className="UnderLineEffect relative text-sm font-semibold transition-all hover:opacity-80 px-3 py-1 cursor-pointer">
        <Link to={e.path}>{e.name}</Link>
      </li>
    </>
  ));

  return (
    <>
      <div className="w-full border-b-[1px] border-text-100">
        <header className="container flex items-center justify-between px-2 h-12">
          <Link
            to={"/"}
            className="relative text-3xl font-bold transition-all hover:opacity-80"
          >
            Portfolio
          </Link>

          <ul className="flex items-center gap-2">{renderNavBarLinks}</ul>
        </header>
      </div>
    </>
  );
};

export default Header;
