import SectionHeader from "./shared/SectionHeader";

function Hero() {
  return (
    <>
      <div className="px-5 pt-7 pb-8 flex flex-col justify-between w-full h-165">
        <SectionHeader title={"WEB DEVELOPER"} text={"BASED IN EGYPT, CAIRO"} />

        <h1 className="my-auto text-[45px] font-semibold leading-[0.83] tracking-tighter">
          I build digital <br />{" "}
          <span className="text-orange">experiences </span> that
          <br /> feel
          <em className="font-[Newsreader,serf] font-normal"> human</em>.
        </h1>

        <div
          className="absolute top-[30%] right-[5%] grid h-22.25 w-22.25 place-items-center animate-[spin_18s_linear_infinite]"
          aria-hidden="true"
        >
          <svg
            className="absolute inset-0 overflow-visible"
            viewBox="0 0 120 120"
          >
            <defs>
              <path
                id="circle"
                d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
              ></path>
            </defs>
            <text className="tracking-[1.2px] text-[8.5px] font-['DM_Mono',monospace]">
              <textPath href="#circle">
                AVAILABLE FOR SELECT PROJECTS · 2026 ·{" "}
              </textPath>
            </text>
          </svg>
          <span className="text-orange text-[24px]">✳</span>
        </div>

        <div className="flex items-center justify-between mt-12.5">
          <h1 className="text-sm">
            Independent developer turning thoughtful ideas into fast,
            accessible, and memorable
            <br />
            products.
          </h1>

          <a
            className="group flex items-center justify-center min-w-11 h-11 border rounded-full transition-all text-ink hover:bg-orange hover:text-white"
            href="#skills"
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
      </div>
    </>
  );
}

export default Hero;
