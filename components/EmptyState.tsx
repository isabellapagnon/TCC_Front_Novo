/* eslint-disable prettier/prettier */
import React from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.themeLight};
`;

const Title = styled.div`
    font: ${fonts.headline1};
    color: ${colors.themeTertiary};
`;

interface EmptyStateProps {
    name: string;
}

const EmptyState = ({ name }: EmptyStateProps) => (
    <Container>
        <Title>Boas-vindas,</Title>
        <Title>{`${name}!`}</Title>
    </Container>
);

export default EmptyState;
