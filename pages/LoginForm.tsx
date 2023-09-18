/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, fonts } from 'src/styles/Theme';
import styled from 'styled-components';

import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 1;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 330px;
    height: 500px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background-color: ${colors.themeLight};
    padding: 0.813rem 0.625rem 0.813rem 0.625rem;
`;

const CloseButtonSection = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
`;

const ButtonSection = styled.div`
    width: 13.438rem;
    margin-bottom: 3.375rem;
    margin-top: 1rem;
`;

const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.themeSecondary};
    color: ${colors.themeLight}};
    border: none;
    border-radius: 50%;
    font-size: 24px;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    :active {
        background-color: ${colors.themeTertiary};
        transform: translateY(0.1rem);
    }
`;

const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 11.75rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
`;

const Title = styled.span`
    font: ${fonts.headline2};
    color: ${colors.themeTertiary};
    margin-bottom: 1rem;
`;
interface LoginFormProps {
    onClick: () => void;
}

const LoginForm = ({ onClick }: LoginFormProps) => {
    const navigate = useNavigate();

    return (
        <>
            <Overlay>
                <LoginContainer>
                    <CloseButtonSection>
                        <CloseButton onClick={onClick}>X</CloseButton>
                    </CloseButtonSection>
                    <Title>AgilixPro</Title>
                    <InputSection>
                        <Input
                            text="Usuário"
                            placeholder="Email do usuário"
                        />
                        <Input text="Senha" placeholder="Senha de rede" />
                    </InputSection>
                    <ButtonSection>
                        <PrimaryButton
                            text="Entrar"
                            onClick={() => navigate('/area-professor')}
                        />
                    </ButtonSection>
                </LoginContainer>
            </Overlay>
        </>
    );
};

export default LoginForm;
