type TMySkills = {
  title: string;
  rate: number;
};

const MySkills = () => {
  const mySkills: TMySkills[] = [
    {
      title: "html",
      rate: 90,
    },
    {
      title: "css",
      rate: 80,
    },
    {
      title: "javascript",
      rate: 100,
    },
    {
      title: "typescript",
      rate: 100,
    },
    {
      title: "react",
      rate: 90,
    },
    {
      title: "tailwind css",
      rate: 80,
    },
    {
      title: "bootstrap",
      rate: 50,
    },
    {
      title: "next js",
      rate: 70,
    },
    {
      title: "mongodb",
      rate: 70,
    },
    {
      title: "php",
      rate: 90,
    },
    {
      title: "mysql",
      rate: 90,
    },
  ];

  const mySkillsRender = mySkills.map(({ title, rate }) => (
    <>
      <tr className="text-center border-b-[1px] h-10 capitalize">
        <td>{title}</td>
        <td>{rate}</td>
        <td>
          <div className="flex items-center justify-center gap-3">
            <button className="p-2 transition-all hover:opacity-70">
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="p-2 transition-all hover:opacity-70">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  ));

  return (
    <>
      <div className="container">
        <h1 className="mt-10 text-2xl font-semibold border-b-2 py-1">
          My Skills
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

export default MySkills;
