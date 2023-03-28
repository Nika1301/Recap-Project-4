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
    name: "Go for a walk",
    isWeatherGood: "true",
  },
];

function App() {
  const [activity, setActivity] = useState(activitiesList);
  function handleAddActivity(newActivity) {
    console.log(handleAddActivity);
    setActivity([...activity, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      {" "}
      <List activities={activity} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
