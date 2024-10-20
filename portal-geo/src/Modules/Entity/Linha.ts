import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';
import { PercursoEntity } from './Percurso';

@Index('idx_cd_linha', ['CdLinha'])
@Index('idx_tab_linha_id_linha', ['IdLinha'])
@Entity({ schema: 'dados_mobilidade', name: 'tab_linha' })
export class Linha {
    @PrimaryGeneratedColumn({ name: 'id_linha' })IdLinha: number;
    @Column({ type: 'varchar', name: 'cd_linha', length: 8 })CdLinha: string;
    @Column({ type: 'varchar', name: 'tx_linha', length: 255 })TxLinha: string;
    @Column({ type: 'decimal', precision: 6, scale: 2, name: 'vl_tarifa' })ValorTarifa: number;
    @Column({ type: 'varchar', name: 'fx_tarifaria', length: 50, nullable: true })NomeTarifario: string;
    @Column({ type: 'date', name: 'dt_inicial_tarifa', nullable: true })DataInicioVigenciaTarifa: Date;
    @Column({ type: 'date', name: 'dt_final_tarifa', nullable: true })DataFimVigenciaTarifa: Date;
}
