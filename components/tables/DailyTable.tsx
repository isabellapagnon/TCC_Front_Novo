/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getStudentSchedule } from '../../api/scheduleApi';
import { Class, getClassColor } from '../../interfaces/Class';
import { Resource } from '../../interfaces/Resource';
import { Schedule } from '../../interfaces/Schedule';
import { colors, fonts } from '../../styles/Theme';
import { Cell, Header, Table_Daily } from './TableStyles';

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

    const buildRow = (professor_class: Class) => {
        const {
            numeroDaAula,
            idCronograma,
            horarioLetra,
            horarioInicio,
            horarioFim,
            idDia,
            data,
            nomeTipoDia,
            diaDaSemana,
            descricao,
            idAtividade,
            nomeAtividade,
            diaLetivo,
            aulaAtual,
            recursos
        } = professor_class;

        const getFormatedDate = (date: string) => {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        };

        const backgroundColor = getClassColor(nomeTipoDia, idAtividade);

        return (
            <>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'first' : undefined}
                >
                    <Id>{numeroDaAula}</Id>
                    <Day>{diaDaSemana}</Day>
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'middle' : undefined}
                >
                    {getFormatedDate(data)}
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'middle' : undefined}
                >
                    {getFormatedDate(data)}
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'middle' : undefined}
                >
                    <ColumnCell>
                        <TimeElement>{horarioLetra}</TimeElement>
                        <TimeElement>
                            {horarioInicio}-{horarioFim}
                        </TimeElement>
                    </ColumnCell>
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'middle' : undefined}
                >
                    {descricao}
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'middle' : undefined}
                >
                    {nomeAtividade}
                </Cell>
                <Cell
                    backgroundColor={backgroundColor}
                    today={aulaAtual ? 'last' : undefined}
                >
                    <ColumnCell>{buildResources(recursos)}</ColumnCell>
                </Cell>
            </>
        );
    };

    const buildResources = (resources: Resource[]) =>
        resources.map(resource => (
            <ResourceElement>{resource.nomeRecurso}</ResourceElement>
        ));

    const buildTable = () => {
        if (!schedule) return <></>;

        return schedule.linhaCronogramaList.map(professor_class =>
            buildRow(professor_class)
        );
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
