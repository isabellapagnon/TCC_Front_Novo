/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
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
import { Cell, CellPhoto, CellPrimary, Header, Table_Daily } from './TableStyles';
import TextAreaField from '../TextAreaField';

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
                {/* <Cell> {'Julia'} </Cell> */}
                <CellPhoto><img
                            src="/assets/images/Avatar05.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Yesterday'} </CellPrimary>
                <Cell> {'Worked on story 1234'} </Cell>
                <Cell> {'Continued working on story 1234'} </Cell>
                <Cell> {'Testing story'} 
                <img src="/assets/images/exclamacaoo" alt="" /> 
                </Cell> 
                <Cell> {'Worked on #756383 '} </Cell>
                <Cell> <TextAreaField value={"Fiz tal coisa"}></TextAreaField> </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar05.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Today'} </CellPrimary>
                <Cell> {'Continued working on story 1234'} </Cell>
                <Cell> {'Testing story 1234'} </Cell>
                <Cell> {'Stated working on story 756383'} </Cell>
                <Cell> {'Workshop all way'} </Cell>
                <Cell> <TextAreaField value={"Fiz tal coisa"}></TextAreaField> </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar05.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Blocker'} </CellPrimary>
                <Cell>{'None'}</Cell>
                <Cell>{'JUnit not working'}</Cell>
                <Cell> {'None'} </Cell>
                <Cell> {'Tests are failling in aplication X'} </Cell>
                <Cell> <TextAreaField value={"Fiz tal coisa"}></TextAreaField> </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar01.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Yesterday'} </CellPrimary>
                <Cell> {'Day Off'} </Cell>
                <Cell> {'Finished #89764 and Started working on #17896'} </Cell>
                <Cell> {'Finished testing #17896'} </Cell>
                <Cell> {'Out of the Office'} </Cell>
                <Cell> {'Continue working on the bug fix'} </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar01.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Today'} </CellPrimary>
                <Cell> {'Continued working on story 89764'} </Cell>
                <Cell> {'Unit Tests for #17896'} </Cell>
                <Cell> {'Deploying #17896 and OOO in the afternoon'} </Cell>
                <Cell> {'Fixing loding bug'} </Cell>
                <Cell> {'None'} </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar01.svg"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Blocker'} </CellPrimary>
                <Cell>{'Database down'}</Cell>
                <Cell>{'Database still down'}</Cell>
                <Cell> {'None'} </Cell>
                <Cell> {'None'} </Cell>
                <Cell> {'Need help with this bug'} </Cell>

                {/* <Cell> {'Julia'} </Cell> */}
                <CellPhoto><img
                            src="/assets/images/Avatar16.png"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Yesterday'} </CellPrimary>
                <Cell> {'Worked on story 82B2829'} </Cell>
                <Cell> {'Continued working on story 1234'} </Cell>
                <Cell> {'Testing story'} 
                <img src="/assets/images/exclamacaoo" alt="" /> 
                </Cell> 
                <Cell> {'Finished story and tried to deploy the code to production'} </Cell>
                <Cell> {' '} </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar16.png"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Today'} </CellPrimary>
                <Cell> {'Continued working on story 82B2829'} </Cell>
                <Cell> {'Unit tests for story 82B2829'} </Cell>
                <Cell> {'Finish Funcional Tests'} </Cell>
                <Cell> {'Work with Devops to deploy code'} </Cell>
                <Cell> {' '} </Cell>

                <CellPhoto><img
                            src="/assets/images/Avatar16.png"
                            alt="Logo"
                            height="60%"
                        ></img></CellPhoto>
                <CellPrimary> {'Blocker'} </CellPrimary>
                <Cell>{'None'}</Cell>
                <Cell>{'Expecting Naveens response'}</Cell>
                <Cell> {'Still waiting for Naveen'} </Cell>
                <Cell> {'Pipeline Failing'} </Cell>
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
