/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column2";

// COMPLETED É NEEDS TO IMPROVE
export default function KanbanBoard() {
  const [improve, setImprove] = useState([]);
  const [wentWell, setWentWell] = useState([]);
  const [feedback, setFeedback] = useState([]);
  // const [wentWell, setWentWell] = useState([]);
  // const [improve, setImprove] = useState([]);
  // const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("./retrospective.json")
    .then((response) => response.json())
    .then((json) => {
      setImprove(json.filter((task) => task.improve));
      setWentWell(json.filter((task) => task.completed));
      setFeedback(json.filter((task) => task.feedback));
    });
}, []);

const handleDragEnd = (result) => {
  const { destination, source, draggableId } = result;

  if (source.droppableId == destination.droppableId) return;

  // REMOVE FROM SOURCE ARRAY

  if (source.droppableId == 2) {
    setImprove(removeItemById(draggableId, improve));
  } 
  else if(source.droppableId == 1){
    setWentWell(removeItemById(draggableId, wentWell));
  }
  else if(source.droppableId == 3){
      setFeedback(removeItemById(draggableId, feedback));
  }

  // GET ITEM

  const task = findItemById(draggableId, [...wentWell, ...improve, ...feedback]);

  // ADD ITEM
  if (destination.droppableId == 2) {
    setImprove([{ ...task, improve: task.improve}, ...improve]);

  } else if(destination.droppableId == 1) {
    // primeira coluna
    setWentWell([{ ...task, completed: task.completed}, ...wentWell]);
  }
  else{
    setFeedback([{ ...task, feedback: task.feedback }, ...feedback]);
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
      <Column title={"Went Well"} tasks={wentWell} id={"1"} color={"#9FDFB2"} />
      <Column title={"Needs to improve"} tasks={improve} id={"2"} color={"#D77A7A"} />
      <Column title={"Feedback"} tasks={feedback} id={"3"} color={"#7AC6E7"} />
    </div>
  </DragDropContext>
);
}
