import "./List.css";

import React from "react";
export default function List({ activities }) {
  return (
    <>
      <h2>Your activities:</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
