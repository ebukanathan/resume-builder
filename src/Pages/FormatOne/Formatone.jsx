import React from "react";
import Workcard from "./Workcard";
import style from "./formatone.module.css";

function Formatone({ resume, summary, edu, eduentries, history, work }) {
  const { surname, othername, email, phone, homeAdd } = resume;
  const { uniname, unitown, degree, gradDate } = edu;
  const { designation, company, city, date } = work;
  return (
    <div className={style.formatone}>
      <div className={style.heading}>
        <div className={style.name}>
          <h1>{surname}</h1>
          <h1 className={style.othername}>{othername}</h1>
        </div>
        <div className={style.address}>
          <p className={style.socialmedia}>{email}</p>
          <p className={style.linkedin}>linkedin.com/ebuka@limdidiek</p>
          <p className={style.homeadress}>{homeAdd}</p>
          <p className={style.phone}>{phone}</p>
        </div>
      </div>
      <div className={style.summary}>
        {summary.length > 1 ? (
          <div className={style.subhead}>
            Summary <hr />
          </div>
        ) : (
          " "
        )}
        <p className={style.summaryText}>{summary}</p>
      </div>
      {/* education */}

      {eduentries.length > 0 ? (
        <div className={style.subhead}>
          Education <hr />
        </div>
      ) : (
        " "
      )}

      {eduentries.map((item, index) => (
        <div key={index} className={style.education}>
          <div className={style.eduleft}>
            <div className={style.uni}>{item.uniname}</div>
            <div className={style.degree}>{item.degree}</div>
          </div>
          <div className={style.eduright}>
            <div className={style.unitown}>{item.unitown}</div>
            <div className={style.unidate}>{item.gradDate}</div>
          </div>
        </div>
      ))}

      <div className={style.summary}>
        <div className={style.subhead}>work History</div>
        <hr />
      </div>
      {history.map((item, index) => (
        <div key={index} className={style.education}>
          <div className={style.eduleft}>
            <div className={style.uni}>{item.designation}</div>
            <div className={style.degree}>{item.company}</div>
          </div>
          <div className={style.eduright}>
            <div className={style.unitown}>{item.city} </div>
            <div className={style.unidate}>{item.date}</div>
          </div>
        </div>
      ))}
      <div className="skills">
        <div className="subhead">Skills</div>

        <hr />
        <ul>
          <li>html</li>
          <li>css</li>
        </ul>
      </div>
    </div>
  );
}

export default Formatone;
