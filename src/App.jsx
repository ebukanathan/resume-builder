import React, { useState } from "react";
import "./App.css";
import Formatone from "./Pages/FormatOne/Formatone";
import Home from "./Pages/home/Home";

function App() {
  const [resume, setResume] = useState({
    surname: "",
    othername: "",
    email: "",
    homeAdd: "",
    phone: "",
  });
  const [summary, setSummary] = useState(" ");

  const [edu, setEdu] = useState({
    uniname: "",
    unitown: "",
    degree: "",
    gradDate: "",
  });
  const [eduentries, setEduentries] = useState([]);
  const [work, setWork] = useState({
    designation: "",
    company: "",
    city: "",
    date: "",
  });
  const [history, setHistory] = useState([]);

  return (
    <div>
      <h1 className="welcome">welcome to your friendly CV builder</h1>

      <div className="landing">
        <div className="left">
          <Home
            resume={resume}
            setResume={setResume}
            summary={summary}
            setSummary={setSummary}
            edu={edu}
            setEdu={setEdu}
            setEduentries={setEduentries}
            eduentries={eduentries}
            work={work}
            setWork={setWork}
            history={history}
            setHistory={setHistory}
          />
        </div>
        <div className="right">
          <Formatone
            resume={resume}
            summary={summary}
            edu={edu}
            eduentries={eduentries}
            history={history}
            work={work}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
