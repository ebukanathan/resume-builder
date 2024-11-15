import React from "react";
import style from "../Pages/FormatOne/formatone.module.css";

function Work({ work, setWork, history, setHistory }) {
  const { designation, company, city, date } = work;

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([...history, work]);
    setWork({ designation: "", company: "", city: "", date: "" });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setWork({ ...work, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          designation
          <input
            type="text"
            value={designation}
            name="designation"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          company
          <input
            type="text"
            value={company}
            name="company"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          city
          <input type="text" name="city" value={city} onChange={handleInput} />
        </label>
        <label htmlFor="">
          date
          <input
            type="date"
            name="degree"
            value={date}
            onChange={handleInput}
          />
        </label>
        <button type="submit">sumit</button>
      </form>
    </div>
  );
}

export default Work;
