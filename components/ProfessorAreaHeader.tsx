/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    height: 100px;
    width: 100%;
    @media screen and (max-width: 500px) {
        justify-content: start;
    }
`;

const TitleGroup = styled.div`
    display: flex;
    min-width: 15.5rem;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.div`
    font: ${fonts.headline1};
    color: ${colors.themeTertiary};
    padding: 15px;
`;

const Subtitle = styled.div`
    font: ${fonts.headline2};
    color: ${colors.themeTertiary};
    align-items: center;
`;

const ButtonSection = styled.div`
    display: flex;
    min-width: 200px;
`;

interface ProfessorAreaHeaderProps {
    discipline: string;
}

const ProfessorAreaHeader = ({ discipline }: ProfessorAreaHeaderProps) => {
    const navigate = useNavigate();

    return (
        <Header>
            <TitleGroup>
                <Title>SARC</Title>
                <Subtitle>Escola Politécnica</Subtitle>
            </TitleGroup>
            {discipline.length !== 0 && (
                <ButtonSection>
                    <PrimaryButton
                        text={'Cronograma'}
                        // TODO: Fix navigation to schedule page of selected discipline
                        onClick={() => navigate('/cronograma')}
                    ></PrimaryButton>
                </ButtonSection>
            )}
        </Header>
    );
};

export default ProfessorAreaHeader;
