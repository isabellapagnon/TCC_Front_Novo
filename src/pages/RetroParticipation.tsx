/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import RetroParticipationHeader from '../components/retroBoard/RetroParticipationHeader';
import "../components/style.css";
import RetroParticipationBoardsCurrent from '../components/tables/RetroParticipationBoardsCurrent'
import RetroParticipationBoardsLast from '../components/tables/RetroParticipationBoardLast'
import RetroParticipationBoards from '../components/tables/RetroParticipationBoards'
import ShowSprint from '../components/ShowSprint';
import ShowSprintCurrent from '../components/ShowSprintCurrent';
import { colors, fonts } from 'src/styles/Theme';
// import RetroBoard from "../components/retro/Retro";
// import KanbanBoard2 from '../components/retroBoard/Kanbanboard2'
//  import KanbanBoard from '../components/retroBoard/Kanbanboard'

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

const RetroParticipation = () => (
    <Container>
         <Sidebar/>;
         <RetroParticipationHeader/>;
         <Legend>
            <BurnDownSubtitles>This Sprint</BurnDownSubtitles>
         </Legend>
         <RetroParticipationBoardsCurrent/>
         <RetroParticipationBoardsLast/>
         <Legend>
            <AgileLeadSubtitles>Last Sprint</AgileLeadSubtitles>
         </Legend>

         <RetroParticipationBoards/>
         <Legend>
            <VelocitySubtitles>Previous Sprints</VelocitySubtitles>
         </Legend>

</Container>
);

export default RetroParticipation;