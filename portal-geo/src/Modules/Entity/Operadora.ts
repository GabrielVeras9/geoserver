import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Index('idx_tab_operadora_id_operadora', ['idOperadora'])
export class OperadoraEntity {
    @PrimaryGeneratedColumn({ name: 'id_operadora' })IdOperadora: number;
    @Column({ type: 'varchar', length: 20, name: 'nm_cpf_cnpj', nullable: true })nmCpfCnpj: string;
    @Column({ type: 'varchar', length: 50, name: 'nm_operadora' })NomeOperadora: string;
    @Column({ type: 'date', name: 'inicio_autorga', nullable: true })InicioVigenciaAutorga: Date;
    @Column({ type: 'date', name: 'fim_autorga', nullable: true })FimVigenciaAutorga: Date;
}
