import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import AboutMe from "./pages/AboutMe/AboutMe";
import { Skills } from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        {/* <Route path="/actors" element={<ActorsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
