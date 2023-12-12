/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function BacklogBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    fetch("./retrospective.json")
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task) => task.completed));
        setIncomplete(json.filter((task) => !task.completed));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    // REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...incomplete, ...completed]);

    // ADD ITEM
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
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
        <Column title={"Ready for development"} tasks={incomplete} id={"1"} />
        <Column title={"In Development"} tasks={completed} id={"2"} />
        <Column title={"Testing"} tasks={[]} id={"3"} />
        <Column title={"Ready to deploy"} tasks={[]} id={"4"} />
        <Column title={"Done"} tasks={[]} id={"5"} />
      </div>
    </DragDropContext>
  );
}
