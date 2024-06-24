type TLastProjects = {
  projectName: string;
  projectLink: string;
  projectLogo: string;
  projectDescription: string;
  projectGithub: string;
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
      <div className="container">
        <h1 className="mt-20 text-2xl font-semibold border-b-2 py-1">
          Last Projects
        </h1>
        <table className="w-full px-1 border-x-2 mt-6">
          <thead className="h-12 border-y-2">
            <tr>
              <th>Skill Name</th>
              <th>Skill Rate</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{mySkillsRender}</tbody>
        </table>
      </div>
    </>
  );
};

export default LastProjects;
