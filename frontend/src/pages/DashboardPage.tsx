import Header from "@components/admin/Header";
import Projects from "@components/admin/Projects";
import Messages from "@components/admin/Messages";
import MySkills from "@components/admin/MySkills";

const DashboardPage = () => {
  return (
    <div className="pb-10">
      <Header />
      <MySkills />
      <Projects />
      <Messages />
    </div>
  );
};

export default DashboardPage;
