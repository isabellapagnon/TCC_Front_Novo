/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import Dropdown from './Dropdown';

const ResourcesSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SelectedList = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 200px;
`;

const SelectedItem = styled.div`
    background-color: ${colors.themeLight};
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 29px;
    align-items: center;
    justify-content: center;
    padding: 5px 5px 5px 18px;
    border: 1px solid ${colors.themeSecondary};
    border-radius: 10px;
    margin-bottom: 5px;
`;

const SelectedLabel = styled.span`
    font: ${fonts.body2};
    color: ${colors.themePrimary};
    text-align: center;
    flex-grow: 1;
`;

const DeleteButton = styled.button`
    color: ${colors.themeSecondary};
    font: ${fonts.body2};
    font-size: 10px;
    background-color: ${colors.themeLight};
    border: 1px solid ${colors.themeSecondary};
    border-radius: 100%;
    padding: 2px 5px;
    cursor: pointer;
    :hover {
        color: ${colors.themeLight};
        background-color: ${colors.themeSecondary};
    }
    :active {
        transform: scale(0.9);
        color: ${colors.themeLight};
        background-color: ${colors.themeSecondary};
    }
`;

const AddButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90px;
    margin-left: 5px;
`;

const AddButton = styled.button`
    color: ${colors.themeLight};
    font: ${fonts.headline3};
    background-color: ${colors.themeTertiary};
    height: 29px;
    border-radius: 100%;
    border: none;
    padding: 3px 9px;
    cursor: pointer;
    :active {
        transform: scale(0.9);
    }
`;

const Resources = () => {
    const [selects, setSelects] = useState<string[]>([
        'Notebook',
        'Laboratório',
        'Cabo'
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const resources: string[] = ['Notebook', 'Laboratório', 'Cabo'];

    const handleAddButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleRemoveItemClick = (index: number) => {
        setSelects(selects.filter((_, itemIndex) => itemIndex !== index));
    };

    const handleItemSelection = (selected: string) => {
        setSelects([...selects, selected]);
        setIsOpen(false);
    };

    return (
        <ResourcesSection>
            <SelectedList>
                {selects.map((resource, index) => (
                    <SelectedItem>
                        <SelectedLabel key={index}>{resource}</SelectedLabel>
                        <DeleteButton
                            onClick={() => handleRemoveItemClick(index)}
                        >
                            X
                        </DeleteButton>
                    </SelectedItem>
                ))}
            </SelectedList>
            <AddButtonSection>
                <AddButton onClick={handleAddButtonClick}>+</AddButton>
                <Dropdown
                    options={resources}
                    handleItemClick={handleItemSelection}
                    isOpen={isOpen}
                />
            </AddButtonSection>
        </ResourcesSection>
    );
};

export default Resources;
