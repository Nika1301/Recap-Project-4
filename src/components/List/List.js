import "./List.css";

import React from "react";
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome!Go outside and:"
          : "Bad weather outside! Here's what you can do now!"}
      </h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            <h3>{activity.name}</h3>
            <button
              className="activity-list__button"
              type="button"
              onClick={() => onDeleteActivity?.(activity)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
