import React from "react";
import "./style.css";
//Components
import CreateTaskForm from './components/forms/CreateTaskForm.jsx';

export default function App() {
  return (
    <div style={{textAlign:"center"}}>
      <CreateTaskForm/>
    </div>
  );
}
