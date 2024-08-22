import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  deleteSkill,
  getAllSkills,
  postSkill,
} from "src/store/reducers/SkillsSlice";
import { TSkillType } from "src/types/SkillTypes";

const MySkills = () => {
  const Store = useAppSelector((state) => state.SkillsSlice);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    Store.data === null && dispatch(getAllSkills());
  }, [Store.data, dispatch]);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const data: TSkillType = {
      title,
      rate,
    };

    dispatch(postSkill(data)).then(() => {
      if (Store.status === "SUCCESS") {
        dispatch(getAllSkills());
        setActivePopup(false);
      }
    });
  };

  const deleteSkillFunc = (id: string | undefined) => {
    dispatch(deleteSkill(id));
  };

  const mySkillsRender =
    Array.isArray(Store.data) &&
    Store.data.map(({ _id, title, rate }) => (
      <tr key={title} className="text-center border-b-[1px] h-10 capitalize">
        <td>{title}</td>
        <td>{rate}</td>
        <td>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => deleteSkillFunc(_id)}
              className="p-2 transition-all hover:opacity-70"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    ));

  const renderPopup = () => (
    <>
      {activePopup && (
        <>
          <div className="absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%] w-full h-full z-40 bg-black opacity-50"></div>
          <div className="absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%] flex flex-col gap-1 max-w-[500px] w-full h-fit bg-white rounded-md overflow-hidden z-50 p-3">
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
                <label htmlFor="Title" className="font-semibold">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  name="projectTitle"
                  id="Title"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="ProjectName" className="font-semibold">
                  Rate
                </label>
                <input
                  id="rate"
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  name="rate"
                  className="py-2 px-3 outline outline-1 outline-gray hover:outline-black focus:outline-black rounded-sm"
                  type="number"
                />
              </div>
              <button className="w-full py-2 mt-20 bg-black text-white rounded-sm transition-all hover:opacity-90">
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
      <div className="container relative">
        <div className="flex items-center justify-between mt-10 border-b-2 py-1">
          <h1 className="text-2xl font-semibold">My Skills</h1>
          <button
            onClick={() => setActivePopup(true)}
            className="outline outline-1 outline-black py-[2px] px-3 rounded-[4px] transition-all hover:outline-text-100"
          >
            Add Skill
          </button>
        </div>
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
