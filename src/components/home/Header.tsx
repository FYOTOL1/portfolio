type TNavLinks = {
  name: string;
  path: string;
  className: string;
};

const Header = () => {
  const navLinks: TNavLinks[] = [
    {
      name: "Portfolio",
      path: "/",
      className: "text-xl sm:text-3xl text-text-200 hover:text-opacity-100",
    },
    {
      name: "about me",
      path: "#about_me",
      className: "text-xs sm:text-sm md:text-base",
    },
    {
      name: "experience area",
      path: "#experience",
      className: "text-xs sm:text-sm md:text-base",
    },
    {
      name: "last projects",
      path: "#last_projects",
      className: "text-xs sm:text-sm md:text-base",
    },
    {
      name: "contact me",
      path: "#contact_me",
      className: "text-xs sm:text-sm md:text-base text-text-200",
    },
  ];

  const navbarRender = navLinks.map((e) => (
    <>
      <li
        className={`${e.className} capitalize text-text-100 transition-all hover:text-opacity-80`}
      >
        <a href={e.path}>{e.name}</a>
      </li>
    </>
  ));

  return (
    <div className="flex items-center w-full bg-main-100 py-3 h-20">
      <div className="md:container px-3 md:p-0 w-full">
        <ul className="flex justify-between flex-wrap gap-3 sm:gap-0 items-center w-full">
          {navbarRender}
        </ul>
      </div>
    </div>
  );
};

export default Header;
