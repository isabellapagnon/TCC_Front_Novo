/* eslint-disable prettier/prettier */
import React from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 11.3vh;
    margin-bottom: 2.39vh;
`;

const Text = styled.span`
    width: 100%;
    font: ${fonts.headline3};
    color: ${colors.themeSecondary};
    text-align: left;
    margin-bottom: 1.86vh;
`;

const Input = styled.input`
    width: 100%;
    height: 5.71vh;
    min-height: 43px;
    max-height: 4vh;
    background-color: ${colors.themeTertiary};
    border-radius: 10px;
    border: none;
    padding-left: 1rem;
    color: ${colors.themeLight};
    font: ${fonts.body2};
    ::placeholder {
        color: ${colors.themeHelper};
        font: ${fonts.body2};
    }
`;

interface LoginFormProps {
    text: string;
    placeholder: string;
}

const LoginForm = ({ text, placeholder }: LoginFormProps) => (
    <Section>
        <Text>{text}</Text>
        <Input placeholder={placeholder} />
    </Section>
);

export default LoginForm;
