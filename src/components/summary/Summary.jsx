import React, { useState } from "react";

function Summary({ summary, setSummary }) {
  const handSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Summary</h3>
      <form action="" onSubmit={handSummary}>
        <textarea
          onChange={handSummary}
          name="summary"
          cols="70"
          value={summary}
          rows="10"
        ></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Summary;
