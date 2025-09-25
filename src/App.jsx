import "./index.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projectss/Projects";
import Contact from "./component/Contact/Contact";
function App() {
  return (
    <div className="Container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
