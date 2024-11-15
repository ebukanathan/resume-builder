import React, { useState } from "react";

function Education({ edu, setEdu, setEduentries, eduentries }) {
  const { uniname, unitown, degree, gradDate } = edu;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEduentries([...eduentries, edu]);
    console.log(eduentries);
    setEdu({ uniname: "", unitown: "", degree: "", gradDate: "" });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setEdu({ ...edu, [name]: value });
  };
  return (
    <div>
      <h3>Education</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          School name:
          <input
            type="text"
            value={uniname}
            name="uniname"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          Location :
          <input
            type="text"
            value={unitown}
            name="unitown"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          Certificate
          <input
            type="text"
            name="degree"
            value={degree}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          Date:
          <input
            type="text"
            name="gradDate"
            value={gradDate}
            onChange={handleInput}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Education;
