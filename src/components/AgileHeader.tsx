/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import LoginForm from 'src/pages/LoginForm';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

const HeaderBackground = styled.div`
    width: 100%;
    top: 0;
    height: 110px;
`;

const HeaderSection = styled.div`
    width: 100%;
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.9) 100%
    );
    backdrop-filter: blur(80px);
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    transition: height 0.3s;
    padding: 5px 0 5px 0;
    height: 110px;
`;

const HomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6vw 0 6vw;
    width: 100%;
    min-height: 100px;
    color: ${colors.themeLight};
    font: ${fonts.headline3};
`;

const TitleGroup = styled.div`
    display: flex;
    min-width: 75.5rem;
    flex-direction: column;
    align-items: center;
    left: 50px;
    @media screen and (max-width: 860px) {
        width: 100%;
        padding-right: 10%;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
`;

const ButtonSection = styled.div`
    display: flex;
    min-width: 200px;
    @media screen and (max-width: 860px) {
        margin-left: 10%;
    }
`;

const Logo = styled.div`
    height: 150px;
    width: 100px;
    // min-height: 40px;
    display: flex;
    // -webkit-transition: height 0.3s;
    // -moz-transition: height 0.3s;
    // transition: height 0.3s;
    // @media screen and (max-width: 860px) {
    //     height: 80px;
    // }
`;

const Title = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 25px;
    left: 369px;
    font: ${fonts.headline4};
    color: ${colors.themeDarker};
    @media screen and (max-width: 860px) {
        padding-right: 10%;
    }
`;

const Subtitle = styled.div`
    font: ${fonts.headline2};
    color: ${colors.themeDarker};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    top: 80px;
    left: 369px;
`;

const RetroParticipationHeader = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const removeLoginForm = () => {
        setShowLoginForm(false);
    };

    return (
        <>
            <HeaderBackground></HeaderBackground>
            <HeaderSection>
                <HomeHeader>
                    <TitleGroup>
                        <Title>SWAT Team</Title>
                        <Subtitle>Agile Metrics</Subtitle>
                    </TitleGroup>

                    {/* <ButtonSection>
                        <PrimaryButton
                            text={'Login'}
                            onClick={() => setShowLoginForm(true)}
                        ></PrimaryButton>
                    </ButtonSection>
                    {showLoginForm ? (
                        <LoginForm onClick={removeLoginForm}></LoginForm>
                    ) : null} */}
                </HomeHeader>
            </HeaderSection>
        </>
    );
};

export default RetroParticipationHeader;
