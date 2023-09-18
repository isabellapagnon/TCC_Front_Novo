/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from '../assets/arrow.png';
import { colors, fonts } from '../styles/Theme';
import Dropdown from './Dropdown';

const SelectSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 200px;
    min-height: 29px;
    border-radius: 10px;
    border: 1px solid ${colors.themeSecondary};
    background-color: ${colors.themeLight};
    transition: all 0.2s ease-in-out;
`;

const SelectLabel = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 36px;
    color: ${colors.themePrimary};
    font: ${fonts.body2};
`;

const SelectButton = styled.button`
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;

    &::after {
        content: '';
        margin-left: 8px;
        width: 20px;
        height: 20px;
        background-image: url(${arrow});
        background-size: contain;
    }
`;

interface SelectProps {
    options: string[];
    defaultValue?: string;
    getLabelValue?: (selected: string) => void;
}

const Select = ({ options, defaultValue, getLabelValue }: SelectProps) => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const getLabel = () => {
        const label = options.find(option => option === selected);
        return label ? label : defaultValue;
    };

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (selected: string) => {
        setSelected(selected);
        setIsOpen(false);
        if (getLabelValue) {
            getLabelValue(selected); // Chama a prop getLabelValue se estiver definida
        }
    };

    return (
        <SelectSection>
            <SelectLabel>{getLabel()}</SelectLabel>
            <SelectButton onClick={handleButtonClick} />
            <Dropdown
                options={options}
                handleItemClick={handleItemClick}
                isOpen={isOpen}
            />
        </SelectSection>
    );
};

export default Select;
