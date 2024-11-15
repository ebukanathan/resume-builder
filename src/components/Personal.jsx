import React from "react";
import style from "../Pages/home/home.module.css";

function Personal({ resume, setResume }) {
  const { surname, othername, email, homeAdd, phone } = resume;

  const handleInput = (e) => {
    const { name, value } = e.target;

    console.log(e.target);
    setResume({ ...resume, [name]: value });
    console.log(resume);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resume);
  };
  return (
    <div className={style.home}>
      <h3 className={style.personal}>Personal Info:</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.names}>
          <label className={style.label}>
            Surnname:
            <input
              name="surname"
              type="text"
              value={surname}
              onChange={handleInput}
            />
          </label>
          <label>
            other names:
            <input
              type="text"
              name="othername"
              value={othername}
              onChange={(e) => handleInput(e)}
            />
          </label>
        </div>
        <div className={style.address}>
          <label>
            email address:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            home address:
            <input
              name="homeAdd"
              value={homeAdd}
              onChange={handleInput}
              type="text"
            />
          </label>
          <label>
            Phone:
            <input
              name="phone"
              value={phone}
              onChange={handleInput}
              type="tel"
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Personal;
