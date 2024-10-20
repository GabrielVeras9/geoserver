/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { formatPosicaoGeoJSON } from '../utils/PosicaoJson';
import { UltimaPosicao } from '../Entity/UltimaPosicao';

@Injectable()
export class UltimaPosicaoRepository {
    constructor(private readonly dataSource: DataSource) { }
    
    /**
         * Ativa a função para pesquisar todas as posições de linhas
         * @returns {Promise<UltimaPosicao[]>}
         */
    async getFindAllOperadorasPosicoes(): Promise<UltimaPosicao[]> {
        const query = `
        SELECT 
            TO2.nm_operadora,
            tup.cd_linha as numero,
            tup.prefixo,
            tup.datalocal,
            tup.velocidade, 
            tup.direcao,
            tup.latitude,
            tup.longitude
        FROM 
            dados_mobilidade.tab_ultima_posicao tup
        JOIN 
            dados_mobilidade.tab_operadora to2 ON to2.id_operadora = tup.id_operadora
        ORDER BY
            TO2.nm_operadora;`;

        const result = await this.dataSource.query(query);
        return formatPosicaoGeoJSON(result) as UltimaPosicao[];
    }
}
