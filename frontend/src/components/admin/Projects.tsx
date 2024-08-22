import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  getAllProjects,
  deleteProject,
  postProject,
} from "src/store/reducers/ProjectsSlice";
import { Link } from "react-router-dom";
import { TProjectCard } from "src/types/ProjectCardTypes";

const Projects = () => {
  const [activePopup, setActivePopup] = useState(false);

  const [projectLogo, setProjectLogo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectLevel, setProjectLevel] = useState<
    "master" | "epic" | "legend"
  >("master");

  const formRef = useRef<HTMLFormElement>(null);

  const Store = useAppSelector((state) => state.ProjectSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const deleteProjectFunc = (projectId: string) => {
    dispatch(deleteProject(projectId)).then(() => dispatch(getAllProjects()));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const data: TProjectCard = {
      projectLogo,
      projectName,
      projectDescription,
      projectLink,
      projectGithub,
      projectLevel,
    };

    dispatch(postProject(data)).then(() => {
      if (Store.status === "SUCCESS") {
        dispatch(getAllProjects());
        setActivePopup(false);
      }
    });
  };

  const myProjectsRender =
    Array.isArray(Store.data) &&
    Store?.data?.map(
      ({
        _id,
        projectName,
        projectLink,
        projectLogo,
        projectDescription,
        projectGithub,
        projectLevel,
      }) => {
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
            <tr
              key={_id}
              className={`text-center border-b-[1px] h-10 capitalize`}
            >
              <td>
                <i className={projectLogo}></i>
              </td>
              <td className="whitespace-nowrap text-ellipsis px-2 overflow-hidden max-w-24">
                {projectName}
              </td>
              <td className="whitespace-nowrap text-ellipsis px-2 overflow-hidden max-w-32">
                {projectDescription}
              </td>
              <td>
                <Link
                  className="opacity-80 transition-all hover:opacity-100 p-2"
                  to={projectLink}
                >
                  <i className="fa-solid fa-link"></i>
                </Link>
              </td>
              <td>
                <Link
                  className="opacity-80 transition-all hover:opacity-100 p-2 text-lg"
                  to={projectGithub}
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </td>
              <td
                style={{ color: projectLevelColor() }}
                className="whitespace-nowrap text-ellipsis px-2 overflow-hidden max-w-24"
              >
                {projectLevel}
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => deleteProjectFunc(_id as string)}
                    className="p-2 transition-all hover:opacity-70"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </>
        );
      }
    );

  const renderPopup = () => (
    <>
      {activePopup && (
        <>
          <div className="absolute top-[50%] left-[50%] w-full h-full z-40 translate-x-[-50%] translate-y-[-50%] bg-black opacity-50"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-1 max-w-[500px] w-full max-h-[650px] h-full bg-white rounded-md overflow-hidden z-50 p-3">
            <button
              className="ms-auto h-4 w-4 bg-red rounded-full"
              onClick={() => setActivePopup(false)}
            ></button>
            <form
              ref={formRef}
              onSubmit={(e) => submitForm(e)}
              className="h-full flex flex-col"
            >
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="Logo" className="font-semibold">
                  Logo Class
                </label>
                <input
                  onChange={(e) => setProjectLogo(e.target.value)}
                  name="projectLogo"
                  id="Logo"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="ProjectName" className="font-semibold">
                  Project Name
                </label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  name="projectName"
                  id="ProjectName"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="Description" className="font-semibold">
                  Description
                </label>
                <input
                  onChange={(e) => setProjectDescription(e.target.value)}
                  name="projectDescription"
                  id="Description"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm max-h-24"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="Link" className="font-semibold">
                  Link
                </label>
                <input
                  onChange={(e) => setProjectLink(e.target.value)}
                  name="projectLink"
                  id="Link"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="url"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="Github" className="font-semibold">
                  Github
                </label>
                <input
                  onChange={(e) => setProjectGithub(e.target.value)}
                  name="projectGithub"
                  id="Github"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="url"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="Level" className="font-semibold">
                  Level
                </label>
                <select
                  onChange={(e) =>
                    setProjectLevel(
                      e.target.value as "master" | "epic" | "legend"
                    )
                  }
                  className="p-2 outline outline-1 rounded cursor-pointer"
                  value={projectLevel}
                >
                  <option value="master">master</option>
                  <option value="epic">epic</option>
                  <option value="legend">legend</option>
                </select>
              </div>
              <button
                onClick={() => {}}
                className="w-full py-2 mt-auto bg-black text-white rounded-sm transition-all hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      {renderPopup()}
      <div className="container">
        <div className="flex items-center justify-between mt-10 border-b-2 py-1">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <button
            onClick={() => setActivePopup(true)}
            className="outline outline-1 outline-black py-[2px] px-3 rounded-[4px] transition-all hover:outline-text-100"
          >
            Add Project
          </button>
        </div>
        <table className="w-full px-1 border-x-2 mt-6">
          <thead className="h-12 border-y-2">
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Link</th>
              <th>Github</th>
              <th>Level</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{myProjectsRender}</tbody>
        </table>
      </div>
    </>
  );
};

export default Projects;
