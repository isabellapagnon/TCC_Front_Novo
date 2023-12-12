/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Avatar, Image } from "antd";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div`
  font: 36px;
  color: #000000;

`;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`;
function bgcolorChange(props) {
  return props.isDragging
    ? "#A3E1DC"
    : props.isDraggable
    ? props.isBacklog
      ? "#DCEAE0"
      : "#DCEAE0"
    : props.isBacklog
    ? "#F2D7DCEAE0D5"
    : "#F4F4F4";
}

export default function Task({ task, index}) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task.id}
                {"  "}
              </small>
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <TextContent>{task.title}</TextContent>
          </div>
          <Icons>
            <div>
              {/* <Avatar
                onClick={() => console.log(task)}
                src={"https://joesch.moe/api/v1/random?key=" + task.id}
              /> */}
            </div>
          </Icons>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}
