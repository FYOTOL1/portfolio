import SocialMediaIcons from "@components/common/SocialMediaIcons";

const Footer = () => {
  return (
    <>
      <footer className="bg-main-100">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-text-100">
          <div className="flex items-center justify-between flex-wrap">
            <h1 className="text-4xl text-text-200">Ahmed Kamel</h1>
            <ul className="flex flex-wrap items-center gap-5 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <SocialMediaIcons />
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
