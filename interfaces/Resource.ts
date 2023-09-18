/* eslint-disable prettier/prettier */
export interface Resource {
    idRecurso: number;
    nomeRecurso: string;
    idTipoRecurso: number;
    nomeTipoRecurso: 'Laboratório' | 'Notebook' | 'Equipamentos';
}
