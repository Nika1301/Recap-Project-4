import React from "react";
import { useState } from "react";
export function Form({ onAddActivity }) {
  const [isWeatherGood, setIsWeatherGood] = useState(false);
  function handleSubmit(event) {
    console.log("HEY)");
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);

    event.target.reset();
    event.target.elements.name.focus();
    console.log(data);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1> Weather in Hamburg</h1>

      <label htmlFor="activity" className="activity">
        Name:
      </label>

      <input id="activity" className="form__input" name="name" required />

      <label className="weather">
        Good Weather Activity
        <input
          type="checkbox"
          name="isWeatherGood"
          checked={isWeatherGood}
          onChange={(event) => setIsWeatherGood(event.target.checked)}
        />
      </label>
      <button className="submitButton" type="submit">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}
