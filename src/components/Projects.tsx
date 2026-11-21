import SectionHeader from "./shared/SectionHeader";

type TProject = {
  key: string;
  name: string;
  desc: string;
  imgUrl: string;
  year: number;
  link: string;
  techs: string[];
};

function Projects() {
  const projects: TProject[] = [
    {
      key: "01",
      name: "adore store",
      desc: "E-commerce",
      imgUrl: "visual-adore-shop.svg",
      year: 2026,
      link: "https://adore-shop.vercel.app",
      techs: ["react", "typescript", "tailwind css"],
    },
    {
      key: "02",
      name: "job finder",
      desc: "web application",
      imgUrl: "visual-job-finder.svg",
      year: 2026,
      link: "https://jobneeded.vercel.app",
      techs: [
        "react",
        "typescript",
        "tailwind css",
        "express",
        "mongodb",
        "nodejs",
      ],
    },
    {
      key: "03",
      name: "portfolio ",
      desc: "web application",
      imgUrl: "visual-portfolio.svg",
      year: 2026,
      link: "https://portoapp.vercel.app",
      techs: ["react", "typescript", "tailwind css"],
    },
  ];

  return (
    <div className="pt-8 pb-16 px-5">
      <hr className="text-line" />
      <SectionHeader
        className="pt-4 pb-9"
        title="More Projects"
        text="archive / 03"
      />

      <div className="pb-9">
        <h1 className="my-auto text-[38px] font-semibold leading-[105%] tracking-tighter">
          Selected <br /> experiments, <br /> products & side <br /> quests.
        </h1>

        <p className="mt-7 text-ink/70 text-sm">
          I combine a strong frontend foundation with practical backend
          knowledge to build complete, production-ready web experiences.
        </p>
      </div>

      <div>
        {projects.map((e) => (
          <div className="pb-10">
            <img className="w-full" src={`/${e.imgUrl}`} alt="Error" />

            <div className="flex items-start justify-between pt-4.5 pb-5">
              <div className="flex w-full">
                <h1 className="pe-2">{e.key}</h1>
                <div className="w-full">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <h1 className="text-2xl text-ink font-medium capitalize">
                        {e.name}
                      </h1>

                      <div className="flex items-center gap-3 text-[11px] [word-spacing:3px] font-medium text-muted-archive mt-1.5 uppercase [font-family:DM Mono]">
                        <p>{e.desc}</p>
                        <p>·</p>
                        <p>{e.year}</p>
                      </div>
                    </div>
                    <a
                      className="group flex items-center justify-center min-w-11 h-11 border rounded-full transition-all text-ink hover:bg-orange hover:text-white"
                      href={e.link}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 -rotate-45 group-hover:rotate-0"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                      >
                        <path d="M5 12h14M14 7l5 5-5 5"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3.5">
                    {e.techs.map((t) => (
                      <div className="px-2.75 py-1.75 text-ink border border-line uppercase font-medium tracking-wide rounded-full">
                        <p className="text-[11px]">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
