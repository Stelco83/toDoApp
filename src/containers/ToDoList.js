import React from "react";
import ToDoComp from "../components/ToDoComp.js";
import "../css/style.css";

const ToDoList = React.memo(props => {
  const taskList = [...props.list].reverse();
  const taskDone = [...props.done];

  return (
    <div className="App">
      <ul>
        {taskList.map(td => (
          <ToDoComp
            className={"toDoMain"}
            key={td.id}
            onClick={props.onChangeStatus.bind(this, td)}
          >
            {td.name}
            <span
              className={"deleteTask"}
              onClick={props.onRemoveTask.bind(this, td.id)}
            >
              X
            </span>
          </ToDoComp>
        ))}

        {taskDone.map(td => (
          <ToDoComp
            className={"toDoMainDone"}
            key={td.id}
            onClick={props.onChangeStatus.bind(this, td)}
          >
            {td.name}
            <span
              className={"deleteTask"}
              onClick={props.onRemoveTask.bind(this, td.id)}
            >
              X
            </span>
          </ToDoComp>
        ))}
      </ul>
    </div>
  );
});

export default ToDoList;
