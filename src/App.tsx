import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Main/Sections/Home/Home";
import Characters from "./Components/Main/Sections/Characters/Characters";
import Places from "./Components/Main/Sections/Places/Places";
import Registration from "./Components/Login/Registration";
import Story from "./Components/Main/Sections/Story/Story";
import Relationships from "./Components/Main/Sections/Characters/Relationships/Relationships";
import Notes from "./Components/Main/Sections/Notes/Notes";
import Settings from "./Components/Main/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/relationships" element={<Relationships />} />
        <Route path="/places" element={<Places />} />
        <Route path="/story" element={<Story />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
