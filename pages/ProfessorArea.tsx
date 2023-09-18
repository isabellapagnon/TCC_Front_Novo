/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { getProfessorClasses } from 'src/api/professorApi';
import { ProfessorClass } from 'src/interfaces/ProfessorClass';
import styled from 'styled-components';

import EmptyState from '../components/EmptyState';
import ProfessorAreaHeader from '../components/ProfessorAreaHeader';
import ProfessorAreaTable from '../components/tables/ProfessorAreaTable';

const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 300px;
`;

const TableSection = styled.div`
    padding: 0 2% 0 2%;
    height: 100%;
`;

const ProfessorArea = () => {
    const [selectedClass, setSelectedClass] = useState<ProfessorClass>();
    const [professorClasses, setProfessorClasses] = useState<ProfessorClass[]>(
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProfessorClasses('123456789');
            setProfessorClasses(response);
        };
        void fetchData();
    }, []);

    const buildTableArea = () => {
        if (selectedClass) {
            return <ProfessorAreaTable />;
        }
        // TODO: Add actual professor name.
        return <EmptyState name={'Professor'} />;
    };

    return (
        <Container>
            {/* <Sidebar
                // TODO: Add actual professor registration.
                user="20219284"
                professorClasses={professorClasses}
                handleClassSelection={(professorClass: ProfessorClass) =>
                    setSelectedClass(professorClass)
                }
            /> */}
            <ContentSection>
                <ProfessorAreaHeader discipline="Disciplina Turma 1201" />
                <TableSection>{buildTableArea()}</TableSection>
            </ContentSection>
        </Container>
    );
};

export default ProfessorArea;
