/* eslint-disable prettier/prettier */
import { Class } from './Class';
import { ClassInfo } from './ClassInfo';

export interface Schedule {
    identificadorCronograma: ClassInfo;
    linhaCronogramaList: Class[];
}
