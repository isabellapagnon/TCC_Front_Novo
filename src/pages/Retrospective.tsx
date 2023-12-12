/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import RetrospectiveHeader from '../components/retroBoard/RetrospectiveHeader';
import "../components/style.css";
// import RetroBoard from "../components/retro/Retro";
 import KanbanBoard2 from '../components/retroBoard/Kanbanboard2'
//  import KanbanBoard from '../components/retroBoard/Kanbanboard'

const Container = styled.div`
    padding: 1%;
    height: 100%;
`;

const TeamName = styled.div`
position: fixed;
width: 920px;
height: 800px;
flex-shrink: 0;
color: #FFF;
font-family: Montserrat, sans-serif;
font-size: 50px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Retrospective = () => (
    <Container>
         <Sidebar/>;
         <RetrospectiveHeader/>;
         {/* <RetroBoard /> */}
         <KanbanBoard2/>;
</Container>
);

export default Retrospective;