/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import DailyMetricsHeader from '../components/DailyMetricsHeader';
import "../components/style.css";
import CurrentDaily from '../components/tables/dailyCharts/CurrentDaily'
import LastDaily from '../components/tables/dailyCharts/LastDaily'
import PreviousDaily from '../components/tables/dailyCharts/PreviousDaily'
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
    font: ${fonts.headline1};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 180px;
    left: 300px;
`;

const AgileLeadSubtitles = styled.div`
    font: ${fonts.headline1};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 180px;
    left: 860px;
`;

const VelocitySubtitles = styled.div`
    font: ${fonts.headline1};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 730px;
    left: 600px;
`;

const DailyMetrics = () => (
    <Container>
         <Sidebar/>;
         <DailyMetricsHeader/>;
         <CurrentDaily/>;
          <Legend>
            <BurnDownSubtitles>This Sprint</BurnDownSubtitles>
         </Legend>
         <LastDaily/>;
         <Legend>
            <AgileLeadSubtitles>Last Sprint</AgileLeadSubtitles>
         </Legend>
         <PreviousDaily/>
         <Legend>
            <VelocitySubtitles>Previous Sprints</VelocitySubtitles>
         </Legend>
         {/* <AgileLead/>;
         
         <Velocity/>;
         */}
         
</Container>
);

export default DailyMetrics;