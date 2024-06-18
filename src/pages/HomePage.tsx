import Header from "@components/home/Header";
import Landing from "@components/home/Landing";
import AboutMe from "@components/home/AboutMe";
import LastProjects from "@components/home/LastProjects";
import ContactMe from "@components/home/ContactMe";
import Footer from "@components/home/Footer";

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <Landing />
      <AboutMe />
      <LastProjects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;
