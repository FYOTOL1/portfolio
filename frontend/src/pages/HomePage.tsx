import Header from "@components/home/Header";
import Landing from "@components/home/Landing";
import AboutMe from "@components/home/AboutMe";
import Projects from "@components/home/Projects";
import ContactMe from "@components/home/ContactMe";
import Footer from "@components/home/Footer";
import TopProjects from "@components/home/TopProjects";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Landing />
      <AboutMe />
      <TopProjects />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;
