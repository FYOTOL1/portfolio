type TNavLinks = {
  name: string;
  path: string;
  className: string;
};

const Header = () => {
  const navLinks: TNavLinks[] = [
    {
      name: "about me",
      path: "#about_me",
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
      className: "text-xs sm:text-sm md:text-base text-text-100",
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
    <div className="flex items-center w-full bg-main-100 py-3 h-15 sm:h-20">
      <div className="md:container flex items-center gap-2 px-3 md:p-0 w-full">
        <h1 className="text-lg sm:text-3xl text-text-200 hover:text-opacity-100">
          Portfolio
        </h1>
        <ul className="flex justify-between flex-wrap gap-2 sm:gap-0 items-center max-w-[300px] w-full ms-auto">
          {navbarRender}
        </ul>
        <form method="GET" action="/cv.pdf">
          <input
            className="text-main-200 font-semibold sm:mx-5 md:mx-10 w-16 sm:w-24 md:w-28 h-6 md:h-8 rounded-[3px] bg-text-200 transition-all hover:opacity-80 cursor-pointer"
            type="submit"
            value={"CV"}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
