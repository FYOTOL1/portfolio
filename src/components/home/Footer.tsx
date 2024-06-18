type TSocialMediaLinks = {
  icon: string;
  link: string;
};

const Footer = () => {
  const socialMediaLinks: TSocialMediaLinks[] = [
    {
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/profile.php?id=100090759159174",
    },
    {
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/ahmed.develop/",
    },
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/ahmed-kamel-dev/",
    },
  ];

  const socialMediaLinksRender = socialMediaLinks.map((e) => (
    <>
      <a href={e.link} rel="noopener noreferrer">
        <i className={`${e.icon} text-2xl transition-all hover:opacity-70`}></i>
      </a>
    </>
  ));
  return (
    <>
      <footer className="bg-main-100">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-text-100">
          <div className="sm:flex sm:items-center sm:justify-between ">
            <h1 className="text-4xl text-text-200">Ahmed Kamel</h1>
            <ul className="flex flex-wrap items-center gap-3 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {socialMediaLinksRender}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
