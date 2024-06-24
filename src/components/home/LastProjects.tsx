import { Link } from "react-router-dom";

type TLastProjects = {
  projectName: string;
  projectLink: string;
  projectLogo: string;
  projectDescription: string;
  projectGithub: string;
};

const ProjectCard = ({
  projectName,
  projectLink,
  projectLogo,
  projectDescription,
  projectGithub,
}: TLastProjects) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 bg-main-100 w-[80%] sm:w-1/2 md:w-1/3 h-60 shadow-main-200 shadow-lg p-5 pb-3 outline outline-1 outline-main-200">
        <i className={`${projectLogo} text-text-200 text-2xl opacity-80`}></i>
        <h1 className="md:text-base lg:text-xl font-semibold text-text-100">
          {projectName}
        </h1>
        <p className="text-text-100 text-center opacity-80 text-sm mt-1">
          {projectDescription}
        </p>

        <div className="flex items-center justify-between w-full mt-auto">
          <div className="flex items-center gap-1">
            <Link
              className="opacity-80 transition-all hover:opacity-100 p-2"
              to={projectLink}
            >
              <i className="fa-solid fa-link text-text-300"></i>
            </Link>
            <Link
              className="opacity-80 transition-all hover:opacity-100 p-2 text-lg"
              to={projectGithub}
            >
              <i className="fa-brands fa-github text-text-300"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const LastProjects = () => {
  const LastProjects: TLastProjects[] = [
    {
      projectName: "News",
      projectLink: "https://platinum-kappa.vercel.app/",
      projectLogo: "fa-solid fa-newspaper",
      projectDescription: "News Web Application",
      projectGithub: "https://github.com/FYOTOL1/platinum",
    },
    {
      projectName: "Booking",
      projectLink: "https://bookin-seven.vercel.app/dist/en/pages/Home.html",
      projectLogo: "fa-solid fa-bed",
      projectDescription: "Simple Booking Web Application",
      projectGithub: "https://github.com/FYOTOL1/bookin",
    },
    {
      projectName: "Authentication System",
      projectLink: "https://acceptme.vercel.app/",
      projectLogo: "fa-solid fa-user",
      projectDescription: "Simple Authentication System Web Application",
      projectGithub: "https://github.com/FYOTOL1/auth_system",
    },
  ];

  return (
    <>
      <div id="last_projects" className="w-full bg-main-100 py-20">
        <div className="container w-full max-w-[1200px]">
          <h1 className="text-4xl font-semibold text-text-200 text-center">
            Last Projects
          </h1>
          <p className="text-text-100 text-center mt-4 text-sm">
            Last Projects I've Worked On
          </p>

          <div className="flex items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 mt-10">
            {LastProjects.map((e) => (
              <ProjectCard
                projectName={e.projectName}
                projectLink={e.projectLink}
                projectLogo={e.projectLogo}
                projectDescription={e.projectDescription}
                projectGithub={e.projectGithub}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastProjects;
