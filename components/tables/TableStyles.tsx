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

    ${props => props.isFirst && `border-top-left-radius: 10px;`}
    ${props => props.isLast && `border-top-right-radius: 10px;`}
`;

export const ShowWeekHeader = styled.div<HeaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${fonts.headline1};
    background-color: ${colors.themeTertiary};
    width: 100%;
    height: 85px;
     max-height: 8.5vh;
    

    ${props => props.isFirst && `border-top-left-radius: 10px;`}
    ${props => props.isLast && `border-top-right-radius: 10px;`}
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
