/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { formatOperadoraVeiculos } from '../utils/OperadoraJson';

@Injectable()
export class OperadoraRepository {
    constructor(private readonly dataSource: DataSource) {}

    /**
     *
     * @returns
     */
    async findAll() {
        const query = `
        SELECT 
            op.id_operadora AS IdOperadora,
            op.nm_operadora AS NomeOperadora,
            ve.placa,
            ve.modelo,
            ve.marca,
            ve.cor,
            ve.tipo,
            ve.fabricacao,
            ve.prefixo
        FROM
            dados_mobilidade.tab_operadora op
        JOIN dados_mobilidade.tab_veiculo ve ON op.id_operadora = ve.id_operadora
        ORDER BY
            op.id_operadora;
        `;
        const result = await this.dataSource.query(query);
        return formatOperadoraVeiculos(result);
    }
}
