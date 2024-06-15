import Header from "@components/home/Header";
import Landing from "@components/home/Landing";
import AboutMe from "@components/home/AboutMe";
import LastProjects from "@components/home/LastProjects";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Landing />
      <AboutMe />
      <LastProjects />
    </div>
  );
};

export default HomePage;
