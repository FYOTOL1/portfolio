import SectionHeader from "./shared/SectionHeader";

const BG = {
  orange: "bg-orange",
  ink: "bg-ink",
  sand: "bg-sand",
  cream: "bg-cream",
};

type TStack = {
  key: string;
  name: string;
  desc: string;
  skills: string[];
  bg: keyof typeof BG;
};

function TechSkills() {
  const stacks: TStack[] = [
    {
      key: "01",
      name: "Frontend",
      desc: "Building fast, responsive interfaces with thoughtful interactions.",
      bg: "orange",
      skills: [
        "Html5",
        "css3",
        "tailwindcss",
        "javascript es6",
        "typescript",
        "react",
      ],
    },

    {
      key: "02",
      name: "Backend",
      desc: "Creating reliable APIs, services, and data-driven applications.",
      bg: "ink",
      skills: [
        "Node.JS",
        "express",
        "rest apis",
        "mongodb",
        "mysql",
        "mongoose",
      ],
    },

    {
      key: "03",
      name: "Tools",
      desc: "A modern workflow from first commit through production deployment.",
      bg: "sand",
      skills: ["Git / github", "figma basics", "vercel", "axios", "clerk", ""],
    },

    {
      key: "04",
      name: "Core practices",
      desc: "Quality-focused development that works for people and performs.",
      bg: "cream",
      skills: [
        "Responsive ui",
        "Accessibility",
        "Performance",
        "SEO",
        "Testing",
        "Clean code",
      ],
    },
  ];

  return (
    <div className="py-16 px-5">
      <hr className="text-line" />
      <SectionHeader
        className="pt-4 pb-9"
        title="TECHNICAL SKILLS"
        text="THE TOOLS I WORK WITH"
      />

      <h1 className="my-auto text-[45px] font-semibold leading-[105%] tracking-tighter">
        Code with <br /> purpose <br /> Built to{" "}
        <em className="text-orange font-[Newsreader,serf] font-normal">
          last.
        </em>
      </h1>

      <div className="pt-4 pb-9">
        <p className="font-sans [word-spacing:5px] text-xs">
          MY STACK / {new Date().getFullYear()}
        </p>

        <p className="mt-5 text-ink/70 text-sm">
          I combine a strong frontend foundation with practical backend
          knowledge to build complete, production-ready web experiences.
        </p>
      </div>

      <div className="w-full">
        {stacks.map((e) => (
          <div
            className={`w-full p-6 ${BG[e.bg]} border border-ink ${e.bg == "sand" || e.bg == "cream" ? "text-ink border-ink" : "text-cream border-cream"}`}
          >
            <p className=" text-[11px]">{e.key}</p>

            <div className="flex flex-col justify-end gap-4 h-50 pb-8">
              <h1 className="text-[40px] tracking-[-6.5%] font-medium">
                {e.name}
              </h1>

              <p className="text-sm">{e.desc}</p>
            </div>

            <div className="grid grid-cols-2 border-t">
              {e.skills.map((s, i) => (
                <div
                  className={`border-b py-3.25 tracking-widest text-[11px] font-medium uppercase ${i % 2 == 1 ? "border-l pl-7" : ""}`}
                >
                  <p>{s}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechSkills;
