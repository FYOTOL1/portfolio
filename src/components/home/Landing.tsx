type TSocialMediaLinks = {
  icon: string;
  link: string;
};

const Landing = () => {
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
      <div className="bg-main-100 h-[400px] md:h-screen max-h-[calc(100vh_-_80px)] pt-10">
        <div className="container flex justify-between flex-row-reverse w-full h-full">
          <div className="relative flex justify-center h-full w-1/2">
            <img
              className="absolute bottom-0 md:h-full"
              src="/landing.png"
              alt="Error"
            />
          </div>

          <div className="relative flex items-start justify-center flex-col h-full w-1/2 text-text-100">
            <div className="flex items-start justify-center flex-col gap-4">
              <p className="Hello relative ms-10 text-sm text-text-200">
                Hello
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-text-100 font-semibold">
                I'm <span className="text-text-200">Ahmed</span> Kamel
              </h1>
              <p className="text-xs sm:text-sm md:text-base">
                I am a web developer with 3 years of experience in developing,
                <br />
                designing and creating web applications
              </p>
            </div>
            <div className="absolute left-0 bottom-5 flex items-center gap-5">
              {socialMediaLinksRender}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
