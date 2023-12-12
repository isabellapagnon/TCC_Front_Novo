/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import BacklogHeader from '../components/backlogBoard/BacklogHeader';
import "../components/style.css";
// import RetroBoard from "../components/retro/Retro";
// import BacklogBoard from '../components/backlogBoard/BacklogBoard'
import BacklogBoard from '../components/backlogBoard/BacklogBoard2'



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

const Backlog = () => (
    <Container>
         <Sidebar/>;
         <BacklogHeader/>;
         {/* <RetroBoard /> */}
         <BacklogBoard />;
</Container>
);

export default Backlog;