import Header from "@components/home/Header";
import Landing from "@components/home/Landing";
import AboutMe from "@components/home/AboutMe";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Landing />
      <AboutMe />
    </div>
  );
};

export default HomePage;
