import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity({ schema: 'dados_mobilidade', name: 'tab_ultima_posicao_geo' })
export class UltimaPosicao {
    @PrimaryGeneratedColumn({ name: 'id_ultimaposicao' })id: number;
    @Column({ type: 'int', nullable: true, name: 'id_operadora' })IdOperadora: number;
    @Column({ type: 'varchar', length: 20, nullable: true, name: 'prefixo' })Prefixo: string;
    @Column({ type: 'timestamp', nullable: true, name: 'datalocal' })DataLocal: Date;
    @Column({ type: 'varchar', length: 15, nullable: true, name: 'velocidade' })Velocidade: string;
    @Column({ type: 'varchar', length: 20, nullable: true, name: 'cd_linha' })NumLinha: string;
    @Column({ type: 'varchar', length: 20, nullable: true, name: 'direcao' })Direcao: string;
    @Column({ type: 'float8', nullable: true, name: 'latitude' })Latitude: number;
    @Column({ type: 'float8', nullable: true, name: 'longitude' })Longitude: number;
}
