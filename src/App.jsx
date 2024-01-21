import Navigation from "./pages/Navigation/Navigation";
import AboutMe from "./pages/AboutMe/AboutMe";
import { Skills } from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <div>
      <Navigation />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
