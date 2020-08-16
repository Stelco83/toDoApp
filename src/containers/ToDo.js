import React, { useState, useEffect } from "react";

import ToDoList from "./ToDoList.js";

const ToDo = props => {
  const [toDoInput, setToDoInput] = useState("");
  const [listArray, setListArray] = useState([]);
  const [done, setDone] = useState([]);
  const [activeButton, setButton] = useState(false);

  useEffect(() => {
    function listExists(name) {
      return listArray.some(el => {
        return el.name === name;
      });
    }

    if (listExists(toDoInput)) {
      setButton(true);
    } else {
      setButton(false);
    }

    if (toDoInput.length < 1) {
      setButton(true);
    }
  }, [listArray, toDoInput]);

  const submitHandler = event => {
    event.preventDefault();

    setListArray(prevList => [
      ...prevList,
      { id: Math.random(), name: toDoInput }
    ]);
    setToDoInput("");
  };

  const onRemoveTask = toDoListId => {
    setListArray(prevList =>
      prevList.filter(listArray => listArray.id !== toDoListId)
    );

    setDone(prevList => prevList.filter(done => done.id !== toDoListId));
  };

  const onChangeStatus = (data, e) => {
    if (e.target.classList.contains("toDoMainDone")) {
      setDone(prevDn => prevDn.filter(done => done.id !== data.id));
      setListArray(prevList => [...prevList, { name: data.name, id: data.id }]);
    }
    if (e.target.classList.contains("toDoMain")) {
      setListArray(prevList =>
        prevList.filter(listArray => listArray.id !== data.id)
      );
      setDone(prevDn => [...prevDn, { name: data.name, id: data.id }]);
    }
  };

  // console.log("[list]", listArray);
  // console.log("[done]", done);

  return (
    <div className="App">
      <form onSubmit={submitHandler} name="Form">
        <input
          type="text"
          id="toDoInput"
          value={toDoInput.replace(/^\s+/g, "")}
          onChange={event => {
            setToDoInput(event.target.value);
          }}
          required
        />

        <button className={"btn"} type="submit" disabled={activeButton}>
          Add ToDo
        </button>
      </form>

      <ToDoList
        list={listArray}
        done={done}
        onChangeStatus={onChangeStatus}
        onRemoveTask={onRemoveTask}
      />
    </div>
  );
};

export default ToDo;
