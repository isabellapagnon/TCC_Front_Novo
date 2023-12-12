/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import ShowWeek from '../components/ShowWeek';
import DailyHeader from '../components/DailyHeader';
import Sidebar from '../components/Sidebar';
import DailyTable from '../components/tables/DailyTable'
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

const Daily = () => (
    <Container>
         {/* <Sidebar/>; */}
         {/* <Header />;  */}
         {/* <TeamName>Swat Team - Daily</TeamName> */}
         <Sidebar/>;
         <DailyHeader />; 
         <ShowWeek />
         <DailyTable /> 
    {/* <ShowWeek /> */}
    {/* <DailyTable /> */}
</Container>
);

export default Daily;