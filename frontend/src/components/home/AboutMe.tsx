import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getAllSkills } from "src/store/reducers/SkillsSlice";
import { TSkillType } from "src/types/SkillTypes";

const AboutMe = () => {
  const Store = useAppSelector((state) => state.SkillsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Store.data === null && dispatch(getAllSkills());
  }, [Store.data, dispatch]);

  const renderMySkills =
    Array.isArray(Store.data) &&
    Store.data.map((e: TSkillType) => (
      <>
        <div className="flex flex-col gap-2 w-full text-text-100">
          <div className="flex justify-between items-center capitalize">
            <p>{e.title}</p>
            <p>{e.rate + "%"}</p>
          </div>
          <div className="relative w-full h-1 bg-black shadow-md">
            <div
              className={`absolute h-full bg-text-200`}
              style={{ width: e.rate + "%" }}
            ></div>
          </div>
        </div>
      </>
    ));

  return (
    <div id="about_me" className="py-20 bg-main-200 w-full">
      <div className="container flex flex-col gap-20 w-full max-w-[1200px]">
        <div className="flex items-center gap-5 sm:gap-10 md:gp-20 lg:gap-30 xl:gap-40 text-xs sm:text-base md:text-lg lg:text-xl">
          <img
            className="w-1/2 max-w-[300xp]"
            src="/thinking.png"
            alt="Error"
          />
          <div className="flex flex-col gap-5">
            <h1 className="AboutMe relative text-lg sm:text-3xl md:text-4xl text-text-200 font-semibold ms-9">
              About Me
            </h1>
            <p className="text-text-100">
              I'm Ahmed, Fullstack developer. I have at least 3 years of <br />
              experience in developing projects and working on them on freelance
              <br />
              sites. I have worked in some companies and gained some good
              <br />
              experiences working as a team.
            </p>
            <a href="#contact_me">
              <button className="px-6 py-2 bg-text-200 mt-6 rounded-sm transition-all hover:opacity-80">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        <div>
          <h1 className="AboutMe relative text-2xl text-text-200 font-semibold ms-9">
            My Skills
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-10">
            {renderMySkills}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
