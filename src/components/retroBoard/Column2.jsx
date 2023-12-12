/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Task from "./Task2";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";
import { fonts } from '../../styles/Theme';

const Container = styled.div`
position: relative;
background-color: #f4f5f7;
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
  padding: 8px;
  // background-color: pink;
  text-align: center;
  font: Roboto
  font: ${fonts.body3};
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id, color }) {
  return (
    <Container className="column">
      <Title
        style={{
          backgroundColor: color,
          position: "stick",
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
