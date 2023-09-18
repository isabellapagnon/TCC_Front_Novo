/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

import DailyTable from '../components/tables/DailyTable';

const Container = styled.div`
    padding: 1%;
    height: 100%;
`;

const Schedule = () => (
    <Container>
        <DailyTable />
    </Container>
);

export default Schedule;
