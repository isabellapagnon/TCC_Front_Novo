/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../styles/Theme';

const DropdownSection = styled.ul`
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    margin: 10px 0;
    width: 100%;
    padding: 0;
    list-style: none;
    font-size: 16px;
    background-color: ${colors.themeLight};
    text-align: center;
    border: 1px solid ${colors.themeSecondary};
    border-radius: 5px;
`;

interface SelectedItemProps {
    onClick: (value: string) => void;
    isFirst?: boolean;
    isLast?: boolean;
}

const Item = styled.li<SelectedItemProps>`
    font: ${fonts.body2};
    color: ${colors.themePrimary};
    background-color: ${colors.themeLight};
    text-align: center;
    border-bottom: 1px solid ${colors.themeSecondary};
    padding: 2px 0 2px 0;

    :hover {
        cursor: pointer;
        color: ${colors.themeLight};
        background-color: ${colors.themeSecondary};
    }

    ${props =>
        props.isFirst &&
        `
    border-radius: 5px 5px 0 0;
  `}

    ${props =>
        props.isLast &&
        `
    border-radius: 0 0 5px 5px;
    border-bottom: none;
  `}
`;

interface DropdownProps {
    options: string[];
    handleItemClick: (value: string) => void;
    isOpen: boolean;
}

const Dropdown = ({ options, handleItemClick, isOpen }: DropdownProps) => (
    <>
        {isOpen && (
            <DropdownSection>
                {options.map((option, index) => (
                    <Item
                        key={index}
                        onClick={() => handleItemClick(option)}
                        isFirst={index === 0}
                        isLast={index === options.length - 1}
                    >
                        {option}
                    </Item>
                ))}
            </DropdownSection>
        )}
    </>
);

export default Dropdown;
