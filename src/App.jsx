import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        {/* <Route path="/actors" element={<ActorsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
