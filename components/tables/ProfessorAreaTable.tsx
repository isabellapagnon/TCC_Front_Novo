/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import { getStudentSchedule } from '../../api/scheduleApi';
import { Class, getClassColor } from '../../interfaces/Class';
import { Schedule } from '../../interfaces/Schedule';
import Resources from '../Resources';
import Select from '../Select';
import TextAreaField from '../TextAreaField';
import { Cell, Header, Table } from './TableStyles';

const Id = styled.span`
    padding-left: 20px;
    color: ${colors.themePrimary};
`;

const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
    padding-right: 20px;
`;

const ProfessorAreaTable = () => {
    const [schedule, setSchedule] = useState<Schedule>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await getStudentSchedule(1);
            setSchedule(response);
        };
        void fetchData();
    }, []);

    const headers = ['', 'Horários', 'Descrição', 'Atividade', 'Recursos'];

    const buildHeaders = () =>
        headers.map((header, index) => (
            <Header isFirst={index === 0} isLast={index === headers.length - 1}>
                {header}
            </Header>
        ));

    const [backgroundColor, setBackgroundColor] = useState<string[]>([]);

    const defineBackground = (
        posicao: number,
        nomeTipoDia: string,
        idAtividade: number
    ) => {
        const newArray = [...backgroundColor];
        newArray[posicao] = getClassColor(nomeTipoDia, idAtividade);
        setBackgroundColor(newArray);
    };

    const getBackgroundColor = (posicao: number) => backgroundColor[posicao];

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

        const activityLabels: { [key: string]: number } = {
            Aula: 1,
            Prova: 2,
            'Prova de Substituição': 3,
            'Prova de G2': 4,
            Trabalho: 5,
            'EAD - Ensino à Distancia': 6,
            'Ensino Remoto': 7,
            Avaliação: 8,
            'Jornada Semana Acadêminca': 9,
            'Avaliação de G2': 10,
            'Stand Calouros': 11
        };

        let newIdAtividade = idAtividade;

        const handleGetLabelValue = (label: string) => {
            newIdAtividade =
                activityLabels[label] !== undefined ? activityLabels[label] : 1;
            defineBackground(numeroDaAula - 1, nomeTipoDia, newIdAtividade);
        };

        const getRowBackgroundColor = () => {
            if (getBackgroundColor(numeroDaAula - 1)) {
                return getBackgroundColor(numeroDaAula - 1);
            }
            return getClassColor(nomeTipoDia, idAtividade);
        };

        return (
            <>
                <Cell backgroundColor={getRowBackgroundColor()}>
                    <div style={{ marginRight: '10px' }}>
                        <Id>{numeroDaAula}</Id>
                    </div>
                </Cell>
                <Cell backgroundColor={getRowBackgroundColor()}>
                    <Date>
                        {getFormatedDate(data)} {idDia}
                        {horarioLetra}
                    </Date>
                </Cell>
                <Cell backgroundColor={getRowBackgroundColor()}>
                    <TextAreaField value={descricao}></TextAreaField>
                </Cell>
                <Cell backgroundColor={getRowBackgroundColor()}>
                    <Select
                        defaultValue={nomeAtividade}
                        getLabelValue={handleGetLabelValue}
                        options={[
                            'Aula',
                            'Prova',
                            'Prova de Substituição',
                            'Prova de G2',
                            'Trabalho',
                            'EAD - Ensino à Distancia',
                            'Ensino Remoto',
                            'Jornada Semana Acadêminca',
                            'Stand Calouros'
                        ]}
                    />
                </Cell>
                <Cell backgroundColor={getRowBackgroundColor()}>
                    <Resources />
                </Cell>
            </>
        );
    };

    const buildTable = () => {
        if (!schedule) return <></>;

        return schedule.linhaCronogramaList.map(professor_class =>
            buildRow(professor_class)
        );
    };

    const buildTag = () => {
        if (!schedule) return '';

        const { nomeDisciplina, numeroDaTurma, predio, sala } =
            schedule.identificadorCronograma;
        return `CODCRED | ${nomeDisciplina} (${numeroDaTurma}) - ${predio}/${sala}`;
    };

    return (
        <>
            {/* <TableTag backgroundColor={colors.themeTertiary}>
                {buildTag()}
            </TableTag> */}
            <Table proportions={[1, 2, 4, 3, 3]}>
                {buildHeaders()}
                {buildTable()}
            </Table>
        </>
    );
};

export default ProfessorAreaTable;
