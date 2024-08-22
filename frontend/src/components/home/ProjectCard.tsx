import { Link } from "react-router-dom";
import { TProjectCard } from "src/types/ProjectCardTypes";

const ProjectCard = ({
  projectName,
  projectLink,
  projectLogo,
  projectDescription,
  projectGithub,
  projectLevel,
}: TProjectCard) => {
  const projectLevelColor = () => {
    if (projectLevel === "master") {
      return "#B3B6B7";
    } else if (projectLevel === "epic") {
      return "#5A189A";
    } else if (projectLevel === "legend") {
      return "#FFAA00";
    } else {
      return "#161922";
    }
  };

  return (
    <>
      <div
        style={{
          outlineColor: projectLevelColor(),
          boxShadow:
            projectLevel === "master"
              ? "0px 0px 5px #B3B6B7"
              : projectLevel === "epic"
              ? "0px 0px 5px #5A189A"
              : projectLevel === "legend"
              ? "0px 0px 5px #FFAA00"
              : "0px 0px 5px #161922",
        }}
        className="flex flex-col items-center gap-2 w-full h-60 shadow-lg p-5 pb-3 outline outline-2 rounded"
      >
        <i
          style={{
            color: projectLevelColor(),
          }}
          className={`${
            projectLogo || "fa-solid fa-diagram-project"
          } text-text-200 text-2xl opacity-80`}
        ></i>
        <h1 className="md:text-base lg:text-xl font-semibold text-text-100">
          {projectName}
        </h1>
        <p className="text-text-100 text-center opacity-80 text-sm mt-1">
          {projectDescription}
        </p>

        <div className="flex items-center justify-between w-full mt-auto">
          <div className="flex items-center gap-1">
            <Link
              style={{ color: projectLevelColor() }}
              className="opacity-80 transition-all hover:opacity-100 p-2"
              to={projectLink}
            >
              <i className="fa-solid fa-link"></i>
            </Link>
            <Link
              style={{ color: projectLevelColor() }}
              className="opacity-80 transition-all hover:opacity-100 p-2 text-lg"
              to={projectGithub}
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
