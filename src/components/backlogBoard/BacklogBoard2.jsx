/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function BacklogBoard() {
  // const [completed, setCompleted] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);

  const [readyDev, setReadyDev] = useState([]);
  const [inDev, setInDev] = useState([]);
  const [testing, setTesting] = useState([]);
  const [readyDeploy, setReadyDeploy] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    fetch("./stories.json")
      .then((response) => response.json())
      .then((json) => {
        // setCompleted(json.filter((task) => task.completed));
        // setIncomplete(json.filter((task) => !task.completed));
        setReadyDev(json.filter((task) => task.readyDev));
        setInDev(json.filter((task) => task.inDev));
        setTesting(json.filter((task) => task.testing));
        setReadyDeploy(json.filter((task) => task.readyDeploy));
        setDone(json.filter((task) => task.done));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    // REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setInDev(removeItemById(draggableId, inDev));
    } 
    else if (source.droppableId == 1) {
      setReadyDev(removeItemById(draggableId, readyDev));
    }
    else if (source.droppableId == 3) {
      setTesting(removeItemById(draggableId, testing));
    }
    else if (source.droppableId == 4) {
      setReadyDeploy(removeItemById(draggableId, readyDeploy));
    }
    else if (source.droppableId == 5) {
      setDone(removeItemById(draggableId, done));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...inDev, ...readyDev, ...testing, ...readyDeploy, ...done ]);

    // ADD ITEM
    if (destination.droppableId == 2) {
      setInDev([{ ...task, inDev: task.inDev }, ...inDev]);
    } 
    else if (destination.droppableId == 1) {
      setReadyDev([{ ...task, readyDev: task.readyDev }, ...readyDev]);
    }
    else if (destination.droppableId == 3) {
      setTesting([{ ...task, testing: task.testing }, ...testing]);
    }
    else if (destination.droppableId == 4) {
      setReadyDeploy([{ ...task, readyDeploy: task.readyDeploy }, ...readyDeploy]);
    }
    else if (destination.droppableId == 5) {
      setDone([{ ...task, done: task.done }, ...done]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={"Ready for development"} tasks={readyDev} id={"1"} />
        <Column title={"In Development"} tasks={inDev} id={"2"} />
        <Column title={"Testing"} tasks={testing} id={"3"} />
        <Column title={"Ready to deploy"} tasks={readyDeploy} id={"4"} />
        <Column title={"Done"} tasks={done} id={"5"} />
      </div>
    </DragDropContext>
  );
}
