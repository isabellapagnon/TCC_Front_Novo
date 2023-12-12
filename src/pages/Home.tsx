/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

import DailyTable from '../components/tables/DailyTable';
import ShowWeek from '../components/ShowWeek';
import Header from '../components/HomeHeader';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    padding: 1%;
    height: 100%;
`;

const Home = () => (
    <Container>
         <Sidebar/>;
         <Header />; 
         
    {/* <ShowWeek /> */}
    {/* <DailyTable /> */}
</Container>
);

export default Home;
