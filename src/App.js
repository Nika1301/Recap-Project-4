import React from "react";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import "./components/Form/Form.js";
import { Form } from "./components/Form/Form.js";
import "./components/List/List.js";
import List from "./components/List/List.js";

const activitiesList = [
  {
    id: "1",
    name: "Reading",
    isGoodWeather: "true",
  },
];

function App() {
  const [activity, setActivity] = useState(activitiesList);
  const isGoodWeather = true;
  const checkedActivity = activity.filter(
    (active) => active.isGoodWeather === isGoodWeather
  );

  function handleAddActivity(newActivity) {
    console.log(handleAddActivity);
    setActivity([...activity, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(activityDelete) {
    setActivity(activity.filter((active) => active !== activityDelete));
  }
  return (
    <div className="App">
      {" "}
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={activity}
        activity={checkedActivity}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
