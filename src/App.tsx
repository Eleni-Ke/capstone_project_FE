import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Main/Sections/Home/Home";
import Characters from "./Components/Main/Sections/Characters/Caracters";
import Places from "./Components/Main/Sections/Places/Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element="Registration" />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
