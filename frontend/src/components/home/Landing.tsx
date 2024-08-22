import SocialMediaIcons from "@components/common/SocialMediaIcons";
import { useEffect, useState } from "react";

const Landing = () => {
  const [activeLineAnim, setActiveLineAnim] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLineAnim(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
              <h1 className="MyName relative text-4xl sm:text-5xl md:text-6xl text-text-100 font-semibold">
                {activeLineAnim && (
                  <span className="Line-Anim absolute top-1/2 translate-y-[-50%] h-[calc(100%_-_5px)] w-[3px] right-[-2.5px] bg-text-100"></span>
                )}
              </h1>

              <p className="text-xs sm:text-sm md:text-base">
                I am a web developer with 3 years of experience in developing,
                <br />
                designing and creating web applications
              </p>
            </div>
            <div className="absolute left-0 bottom-5 flex items-center gap-5">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
