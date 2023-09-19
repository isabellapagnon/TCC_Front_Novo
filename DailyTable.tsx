/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getStudentSchedule } from '../../api/scheduleApi';
import { Class, getClassColor } from '../../interfaces/Class';
import { Resource } from '../../interfaces/Resource';
import { Schedule } from '../../interfaces/Schedule';
import { colors, fonts } from '../../styles/Theme';
import { Cell,CellPrimary, Header, Table_Daily } from './TableStyles';

const Id = styled.span`
    padding-left: 20px;
    color: ${colors.themePrimary};
`;

const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
    padding-right: 20px;
`;

const ColumnCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TimeElement = styled.span`
    width: 100%;
    text-align: center;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
`;

const ResourceElement = styled.span`
    width: 100%;
    text-align: center;
    margin: 10px 0;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
`;

const DailyTable = () => {
    const [schedule, setSchedule] = useState<Schedule>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getStudentSchedule(1);
            setSchedule(response);
        };
        void fetchData();
    }, []);

    const headers = [
        'Name',
        'Status',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];


    const buildHeaders = () =>
        headers.map((header, index) => (
            <Header isFirst={index === 0} isLast={index === headers.length - 1}>
                {header}
            </Header>
        ));

    
    const rows = ['Yesterday, Today, Blocker'];
    const buildRow = () => {
        return (
            <>
                <Cell> {'Julia'} </Cell>
                <CellPrimary> {'Yesterday'} </CellPrimary>
                <Cell> {'Worked on story 1234'} </Cell>
                <Cell> {'Continued working on story 1234'} </Cell>
                <Cell> {'Testing story'} </Cell>
                <Cell> {' '} </Cell>
                <Cell> {' '} </Cell>

                <Cell> {'Julia'} </Cell>
                <CellPrimary> {'Today'} </CellPrimary>
                <Cell> {'Continued working on story 1234'} </Cell>
                <Cell> {'Testing story 1234'} </Cell>
                <Cell> {' '} </Cell>
                <Cell> {' '} </Cell>
                <Cell> {' '} </Cell>

                <Cell> {'Julia'} </Cell>
                <CellPrimary> {'Blocker'} </CellPrimary>
                <Cell>{'None'}</Cell>
                <Cell>{'JUnit not working'}</Cell>
                <Cell> {' '} </Cell>
                <Cell> {' '} </Cell>
                <Cell> {' '} </Cell>
            
            </>
        );
    };

    const buildTable = () => {
        // if (!schedule) return <></>;

        return buildRow();
    };

    return (
        <>
            {/* <TableTag backgroundColor={colors.themeTertiary}>
                {buildTag()}
            </TableTag> */}
            <Table_Daily proportions={[1, 1.5, 2, 2, 2, 2, 2]}>
                {buildHeaders()}
                {buildTable()}
            </Table_Daily>
        </>
    );
};

export default DailyTable;
