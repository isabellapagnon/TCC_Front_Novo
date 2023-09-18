/* eslint-disable prettier/prettier */
import { ProfessorClass } from '../interfaces/ProfessorClass';
import { baseURL, professorClasses } from './routes';

export const getProfessorClasses = async (
    registration: string
): Promise<ProfessorClass[]> => {
    const response = await fetch(
        `${baseURL}/${professorClasses}/${registration}`
    );
    return await response.json();
};
