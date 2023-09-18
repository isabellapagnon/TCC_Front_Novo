/* eslint-disable prettier/prettier */
import React from 'react';
import { getResourceColor, Period } from 'src/interfaces/Period';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import {
    BackgroundColorProps,
    Cell,
    Header,
    Table,
} from './TableStyles';

const ResourceType = styled.div<BackgroundColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
    padding: 5px 10px;
    min-width: 150px;
    border-radius: 10px;
    ${props => `background-color: ${props.backgroundColor};`}
`;

interface HomeTableProps {
    time: string;
    periods: Period[] | undefined;
}

const HomeTable = ({ time, periods }: HomeTableProps) => {
    const headers = ['Status', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const buildHeaders = () =>
        headers.map((header, index) => (
            <Header
                key={index}
                isFirst={index === 0}
                isLast={index === headers.length - 1}
            >
                {header}
            </Header>
        ));

    const buildRow = (period: Period) => {
        const {
            nomeProfessor,
            numeroDaTurma,
            nomeDisciplina,
            nomeRecurso,
            idTipoRecurso
        } = period;
        return (
            <>
                <Cell>{`${nomeDisciplina} (Turma ${numeroDaTurma})`}</Cell>
                <Cell>
                    <ResourceType
                        backgroundColor={getResourceColor(idTipoRecurso)}
                    >
                        {nomeRecurso}
                    </ResourceType>
                </Cell>
                <Cell>{nomeProfessor}</Cell>
            </>
        );
    };

    const buildTable = () => periods && periods.map(period => buildRow(period));

    return (
        <>
            {/* <TableTag backgroundColor={colors.themeSecondary}>{time}</TableTag> */}
            <Table proportions={[1, 1, 1]}>
                {buildHeaders()}
                {buildTable()}
            </Table>
        </>
    );
};

export default HomeTable;
