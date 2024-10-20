/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'dados_mobilidade', name: 'tab_parada' })
export class Parada {
  @PrimaryGeneratedColumn()id: number;
  @Column()sequencial: number;
  @Column()sentido: string;
  @Column()cod_dftrans: string;
  @Column('decimal', { precision: 10, scale: 6 })longitude: number;
  @Column('decimal', { precision: 10, scale: 6 })latitude: number;
}
