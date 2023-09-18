/* eslint-disable prettier/prettier */
import React from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

const Button = styled.button`
    width: 80%;
    height: 3.313vh;
    min-height: 40px;
    color: ${colors.themeLight};
    font: ${fonts.headline3};
    background-color: ${colors.themeSecondary};
    border-radius: 13px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    :active {
        background-color: ${colors.themeTertiary};
        transform: translateY(0.1rem);
    }
`;

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryButton = ({ text, onClick }: ButtonProps) => (
    <Button onClick={onClick}>{text}</Button>
);

export default PrimaryButton;
