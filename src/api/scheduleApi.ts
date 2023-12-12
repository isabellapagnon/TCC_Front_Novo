/* eslint-disable prettier/prettier */
import { StudentView } from 'src/interfaces/StudentView';

import { Schedule } from '../interfaces/Schedule';
import { baseURL, studentSchedule, studentView } from './routes';

export const getStudentSchedule = async (
    classId: number
): Promise<Schedule> => {
    const response = await fetch(`${baseURL}/${studentSchedule}/${classId}`);
    return await response.json();
};

export const getStudentView = async (): Promise<StudentView> => {
    const response = await fetch(`${baseURL}/${studentView}`);
    return await response.json();
};
