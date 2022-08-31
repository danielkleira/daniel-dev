import AboutMe from "../../Components/AboutMe";
import Header from "../../Components/Header";
import { useContext } from "react";
import { HeaderContext } from "../../Providers/Head";
import Projects from "../../Components/Projects";
import Articles from "../../Components/Articles";
import Contact from "../../Components/Contact";
import { useRef } from "react";

const Body = () => {
  const { tab } = useContext(HeaderContext);

  return (
    <>
      
      <Header/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Body;

/*  <Header />
      {tab === "aboutMe" ? (
        <AboutMe />
      ) : tab === "projects" ? (
        <Projects />
      ) : tab === "articles" ? (
        <Articles />
      ) : tab === "contact" ? (
        <Contact />
      ) : (
        <AboutMe />
      )}  */
