/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import AgileHeader from '../components/AgileHeader';
import "../components/style.css";
import BurnDownBoard from '../components/tables/agile/BurnDownBoard'
import AgileLead from '../components/tables/agile/AgileLead'
import Velocity from '../components/tables/agile/Velocity'
import { colors, fonts } from 'src/styles/Theme';

const Container = styled.div`
    padding: 1%;
    height: 100%;
`;

const Legend = styled.div`
    display: flex;
    min-width: 75.5rem;
    flex-direction: column;
    align-items: center;
    left: 50px;
    @media screen and (max-width: 860px) {
        width: 100%;
        padding-right: 10%;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
`;

const BurnDownSubtitles = styled.div`
    font: ${fonts.headline2};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 500px;
    left: 270px;
`;

const AgileLeadSubtitles = styled.div`
    font: ${fonts.headline2};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 500px;
    left: 900px;
`;

const VelocitySubtitles = styled.div`
    font: ${fonts.headline2};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 980px;
    left: 570px;
`;

const AgileMetrics = () => (
    <Container>
         <Sidebar/>;
         <AgileHeader/>;
         <BurnDownBoard/>;
         <Legend>
            <BurnDownSubtitles>Burn Down Board</BurnDownSubtitles>
         </Legend>
         <AgileLead/>;
         <Legend>
            <AgileLeadSubtitles>Agile Lead Time Board</AgileLeadSubtitles>
         </Legend>
         <Velocity/>;
         <Legend>
            <VelocitySubtitles>Velocity Chart</VelocitySubtitles>
         </Legend>
         
</Container>
);

export default AgileMetrics;