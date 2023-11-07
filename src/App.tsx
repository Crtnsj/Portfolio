import Header from "./Components/Header";
import Loader from "./Components/Loader";
import NavBar from "./Components/NavBar";
import About from "./Components/Parts/About";
import Contact from "./Components/Parts/Contact";
import Monitoring from "./Components/Parts/Monitoring";
import Projects from "./Components/Parts/Projects";
import Skills from "./Components/Parts/Skills";

const App = () => {
  return (
    <div>
      <Loader />
      <div className="loadAnim__other">
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Monitoring />
        <Contact />
      </div>
    </div>
  );
};
export default App;
