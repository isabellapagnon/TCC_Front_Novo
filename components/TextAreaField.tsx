/* eslint-disable prettier/prettier */
import React from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

const TextArea = styled.textarea`
    width: 100%;
    min-height: 36px;
    overflow: hidden;
    resize: vertical;
    border-radius: 10px;
    border: 1px solid ${colors.themeSecondary};
    background-color: ${colors.themeLight};
    color: ${colors.themePrimary};
    font: ${fonts.body2};
    :focus {
        outline: none;
    }
`;

interface TextAreaFieldProps {
    value: string;
}

const TextAreaField = ({ value }: TextAreaFieldProps) => (
    <TextArea>{value}</TextArea>
);

export default TextAreaField;
