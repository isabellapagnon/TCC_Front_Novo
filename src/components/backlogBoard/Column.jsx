/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Task from "./Task";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  position: relative;
  background-color: #F4F2F2;
  border-radius: 2.5px;
  width: 500px;
  height: 520px;
  top: -55px;
  left: 100px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  position: fixed;
  width: 200px;
  top: 120px;
  padding: 0px;
  background-color: #F7DA91;
  text-align: center;
  color: black;
  font: Roboto
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id , color}) {
  return (
    <Container className="column">
      <Title
        style={{
          backgroundColor: {color},
          position: "stick",
          font: "Roboto"
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
