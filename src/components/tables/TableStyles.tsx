/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { colors, fonts } from '../../styles/Theme';

export interface BackgroundColorProps {
    backgroundColor?: string;
}

export interface TableProps {
    proportions: number[];
}

export const Table = styled.div<TableProps>`
    display: grid;
    width: 100%;
    padding: 20px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 20px 20px 20px 20px;
    background-color: ${colors.themeHelper};
    grid-template-columns: ${props => `${props.proportions.join('fr ')}fr`};
    
`;

export const TableSW = styled.div<TableProps>`
    display: grid;
    width: 130%;
    padding: 20px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 20px 20px 20px 20px;
    background-color: ${colors.themeHelper};
    grid-template-columns: ${props => `${props.proportions.join('fr ')}fr`};
    
`;
export const TableSW2 = styled.div<TableProps>`
    display: grid;
    position: absolute;
    width: 130%;
    top: 700px;
    padding: 20px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 20px 20px 20px 20px;
    background-color: ${colors.themeHelper};
    grid-template-columns: ${props => `${props.proportions.join('fr ')}fr`};
    
`;

export interface HeaderProps {
    isFirst?: boolean;
    isLast?: boolean;
}

export const Header = styled.div<HeaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    font: ${fonts.headline2};
    background-color: ${colors.themeTertiary};

    ${props => props.isFirst && `border-top-left-radius: 15px;`}
    ${props => props.isLast && `border-top-right-radius: 15px;`}
    ${props => props.isFirst && `border-bottom-left-radius: 15px;`}
    ${props => props.isLast && `border-bottom-right-radius: 15px;`}
`;

export const ShowWeekHeader = styled.div<HeaderProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${fonts.headline1};
    background-color: ${colors.themeTertiary};
    width: 35%;
    top: 165px;
    left: 620px;
    padding: 27px;
    max-height: 5.5vh;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    
    // ${props => props.isFirst && `border-top-left-radius: 25px;`}
    // ${props => props.isLast && `border-top-right-radius: 25px;`}
`;

export const ShowWeekHeader2 = styled.div<HeaderProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${fonts.headline1};
    background-color: ${colors.themeTertiary};
    width: 27%;
    top: -5px;
    left: 365px;
    padding: 27px;
    max-height: 5.5vh;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    
    // ${props => props.isFirst && `border-top-left-radius: 25px;`}
    // ${props => props.isLast && `border-top-right-radius: 25px;`}
`;

export const Table_Daily = styled.div<TableProps>`
    display: grid;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 111%;
    left: 50px;
    padding: 20px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 20px 20px 20px 20px;
    background-color: ${colors.themeHelper};
    grid-template-columns: ${props => `${props.proportions.join('fr ')}fr`};
`;

export interface CellProps {
    backgroundColor?: string;
    today?: 'first' | 'middle' | 'last';
}

export const Cell = styled.div<CellProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px;
    min-height: 73px;
    font: ${fonts.body1};
    color: ${colors.themePrimary};
    border-bottom: 2px solid #a6a6a6;
    ${props => `background-color: ${props.backgroundColor};`};

    ${props => props.today && `border-top: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today && `border-bottom: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today === 'first' &&
        `border-left: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today === 'last' &&
        `border-right: 3px solid ${colors.themeTertiary};`};

    ${props => props.today === 'first' && `border-radius: 10px 0 0 10px;`}
    ${props => props.today === 'last' && `border-radius: 0 10px 10px 0;`}
    
    ${props => props.today && `font-weight: 800;`}
`;

export const CellPhoto = styled.div`
width: 15px;
height: 150px;
display: flex;
//top: 50%; 
//left: 0px; 
transform: translate(10%, -3%);
`;

export const CellPrimary = styled.div<CellProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px;
    min-height: 73px;
    font: ${fonts.body3};
    color: ${colors.themePrimary};
    border-bottom: 2px solid #a6a6a6;
    ${props => `background-color: ${props.backgroundColor};`};

    ${props => props.today && `border-top: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today && `border-bottom: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today === 'first' &&
        `border-left: 3px solid ${colors.themeTertiary};`};
    ${props =>
        props.today === 'last' &&
        `border-right: 3px solid ${colors.themeTertiary};`};

    ${props => props.today === 'first' && `border-radius: 10px 0 0 10px;`}
    ${props => props.today === 'last' && `border-radius: 0 10px 10px 0;`}
    
    ${props => props.today && `font-weight: 800;`}
`;