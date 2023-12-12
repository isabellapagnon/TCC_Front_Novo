/* eslint-disable prettier/prettier */
import { colors } from 'src/styles/Theme';

export interface Period {
    nomeProfessor: string;
    numeroDaTurma: number;
    nomeDisciplina: string;
    data: string;
    horarioLetra: 'AB' | 'CD' | 'EE' | 'FG' | 'HI' | 'JK' | 'LM' | 'NP';
    horarioInicio: string;
    horarioFim: string;
    nomeRecurso: string;
    idTipoRecurso: number;
    nomeTipoRecurso: 'Laboratório' | 'Notebook' | 'Equipamentos';
}

const resourceColor: { [key: number]: string } = {
    1: colors.resLab,
    2: colors.resNote,
    3: colors.resKit
};

export const getResourceColor = (idTipoRecurso: number): string =>
    resourceColor[idTipoRecurso];
