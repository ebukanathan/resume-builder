import React, { useState } from "react";
import style from "./home.module.css";
import { IoIosAddCircle } from "react-icons/io";
import Formatone from "../FormatOne/Formatone";
import Personal from "../../components/Personal";
import Summary from "../../components/summary/Summary";
import Education from "../../components/Education";
import Work from "../../components/Work";

function Home({
  resume,
  summary,
  setSummary,
  setEdu,
  edu,
  eduentries,
  setEduentries,
  work,
  setWork,
  history,
  setHistory,
}) {
  // const toggleShow = () => {
  //   setShow((c) => !c);
  // };
  return (
    <div className={style.home}>
      {<Personal resume={resume} />}
      {<Summary summary={summary} setSummary={setSummary} />}
      {
        <Education
          edu={edu}
          setEdu={setEdu}
          eduentries={eduentries}
          setEduentries={setEduentries}
        />
      }

      {
        <Work
          work={work}
          setWork={setWork}
          history={history}
          setHistory={setHistory}
        />
      }
      {/* <h1 className={style.addExp}> */}
      {/* Add Experience {show ? "" : <IoIosAddCircle onClick={toggleShow} />}
      </h1> */}
      {/* {show ? (
        <form action="">
          <div className="role">
            <label>
              company Name:
              <input type="name" />
            </label>
            <label>
              Designation:
              <input type="text" />
            </label>
            <div className={style.dateofwork}>
              <label className={style.date}>
                start
                <input type="date" />
              </label>
              <label className={style.date}>
                end
                <input type="date" />
              </label>
            </div>
            <div className={style.responsibilities}>
              <label className={style.date}>
                responsibities
                <textarea type="text" rows="5" cols="50">
                  respo....
                </textarea>
              </label>
            </div>
          </div>
        </form>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default Home;
