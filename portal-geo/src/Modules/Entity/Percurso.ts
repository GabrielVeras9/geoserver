/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Linha } from './Linha';

@Entity({ schema: 'dados_mobilidade', name: 'tab_itinerario' })
export class PercursoEntity {
  @PrimaryGeneratedColumn({ name: 'id_itinerario' })
  idItinerario: number;

  @Column({ name: 'id_linha' })idLinha: number;
  @Column({ name: 'lin_extensao', type: 'numeric', precision: 6, scale: 2 })linExtensao: number;
  @Column({ name: 'lin_sentido', type: 'varchar', length: 10 })linSentido: string;
  @Column({ name: 'geo_linhas_lin', type: 'geometry', nullable: true, spatialFeatureType: 'LineString', srid: 4323 })geoLinhasLin: string;
}
