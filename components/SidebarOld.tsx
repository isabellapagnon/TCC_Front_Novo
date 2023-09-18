/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfessorClass } from 'src/interfaces/ProfessorClass';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

const TextH2Light = styled.span`
    font: ${fonts.headline2};
    color: ${colors.themeLight};
`;

const TextB1Light = styled.span`
    font: ${fonts.body1};
    color: ${colors.themeLight};
`;

const TextH2Tertiary = styled.span`
    font: ${fonts.headline2};
    color: ${colors.themeTertiary};
`;

const TextB1Primary = styled.span`
    font: ${fonts.body1};
    color: ${colors.themePrimary};
    text-align: center;
`;

const Container = styled.div`
    background-color: ${colors.themeTertiary};
    top: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    align-items: center;
    padding: 30px;

    span {
        margin-bottom: 5px;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonSection = styled.div`
    display: flex;
    min-width: 100px;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);
    return (
        <Container>
            <SidebarHeader>
                <img
                    src="/assets/images/AgilixPro_1.svg"
                    width="150px"
                    height="100%"
                    alt={'Logo'}
                />
            </SidebarHeader>
            <ButtonSection>
            </ButtonSection>
        </Container>
    );
};

export default Sidebar;
