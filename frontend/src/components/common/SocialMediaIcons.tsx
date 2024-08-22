type TSocialMediaLinks = {
  icon: string;
  link: string;
};

const SocialMediaIcons = () => {
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

  return <>{socialMediaLinksRender}</>;
};

export default SocialMediaIcons;
