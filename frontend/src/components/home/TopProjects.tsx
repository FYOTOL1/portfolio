import { TProjectCard } from "src/types/ProjectCardTypes";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "src/store/reducers/ProjectsSlice";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useEffect } from "react";

const TopProjects = () => {
  const Store = useAppSelector((state) => state.ProjectSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Store.data === null && dispatch(getAllProjects());
  }, [Store.data, dispatch]);

  return (
    <>
      <div id="last_projects" className="w-full bg-main-100 py-20">
        <div className="container w-full max-w-[1200px]">
          <h1 className="text-4xl font-semibold text-text-200 text-center">
            Top Projects
          </h1>
          <p className="text-text-100 text-center mt-4 text-sm">
            Top Projects I've Worked On
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {Array.isArray(Store.data) &&
              Store.data.map((e: TProjectCard) => (
                <>
                  {e.projectLevel === "legend" && (
                    <ProjectCard
                      projectName={e.projectName}
                      projectLink={e.projectLink}
                      projectLogo={e.projectLogo}
                      projectLevel={e.projectLevel}
                      projectGithub={e.projectGithub}
                      projectDescription={e.projectDescription}
                    />
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProjects;
