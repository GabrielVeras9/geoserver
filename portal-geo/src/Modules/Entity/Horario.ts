/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'dados_mobilidade', name: 'tab_horaria' })
export class Horaria {
    @PrimaryGeneratedColumn({ name: 'id_horario' }) IdHoraria: number;
@Column({ type: 'varchar', name: 'domingo', length: 1}) Domigo: string;
@Column({ type: 'varchar', name: 'segunda', length: 1}) Segunda: string;
@Column({ type: 'varchar', name: 'terca', length: 1}) Terca: string;
@Column({ type: 'varchar', name: 'quarta', length: 1}) Quarta: string;
@Column({ type: 'varchar', name: 'quinta', length: 1}) Quinta: string;
@Column({ type: 'varchar', name: 'sexta', length: 1}) Sexta: string;
@Column({ type: 'varchar', name: 'sabado', length: 1 }) Sabado: string;
@Column({ type: 'int',     name: 'hr_prevista' }) HoraPrevista: number;
@Column({ type: 'date',     name: 'dt_inicio_vigencia' }) InicioVigencia: number;
@Column({ type: 'date',     name: 'dt_fim_vigencia' }) FimVigencia: number;
}
