import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<kot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
