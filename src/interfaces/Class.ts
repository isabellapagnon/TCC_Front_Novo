/* eslint-disable prettier/prettier */
import { colors } from '../styles/Theme';
import { Resource } from './Resource';

export interface Class {
    numeroDaAula: number;
    idCronograma: number;
    horarioLetra: 'AB' | 'CD' | 'EE' | 'FG' | 'HI' | 'JK' | 'LM' | 'NP';
    horarioInicio: string;
    horarioFim: string;
    idDia: number;
    data: string;
    nomeTipoDia: 'Dia letivo' | 'Feriado' | 'Suspensão de aula' | 'G2';
    diaDaSemana: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX';
    descricao: string;
    idAtividade: number;
    nomeAtividade:
        | 'Aula'
        | 'Prova'
        | 'Prova de Substituição'
        | 'Prova de G2'
        | 'Trabalho'
        | 'EAD - Ensino à Distancia'
        | 'Ensino Remoto'
        | 'Jornada Semana Acadêminca'
        | 'Stand Calouros';
    diaLetivo: boolean;
    aulaAtual: boolean;
    recursos: Resource[];
}

const dayTypeColors: { [key: string]: string } = {
    Feriado: colors.actFeriado,
    'Suspensão de aula': colors.actFeriado,
    G2: colors.actG2
};

const activityTypeColors: { [key: number]: string } = {
    1: colors.themeHelper,
    2: colors.actProva,
    3: colors.actPS,
    4: colors.actG2,
    5: colors.actTrabalho,
    6: colors.themeHelper,
    7: colors.themeHelper,
    8: colors.actEvento,
    9: colors.actEvento
};

export const getClassColor = (
    nomeTipoDia: string,
    idAtiviade: number
): string => {
    if (nomeTipoDia in dayTypeColors) return dayTypeColors[nomeTipoDia];
    if (idAtiviade in activityTypeColors) return activityTypeColors[idAtiviade];
    return colors.themeHelper;
};
