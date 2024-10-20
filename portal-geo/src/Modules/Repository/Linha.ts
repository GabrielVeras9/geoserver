import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { formatLinhasByOperadora } from '../utils/Linha'; // Importa a função de formatação

@Injectable()
export class LinhaRepository {
    constructor(private readonly dataSource: DataSource) {}

    /**
     * Retorna todas as linhas agrupadas por operadora
     * @returns
     */
    async getFindAll() {
        const query = `
        select 
            to2.id_operadora,
            to2.nm_operadora as operadora, 
            tl.cd_linha as numero,
            ti.lin_sentido as sentido,
            tl.tx_linha as descricao,
            tl.vl_tarifa as tarifa,
            tl.fx_tarifaria as FaixaTarifaria
        from
            dados_mobilidade.tab_linha tl,
            dados_mobilidade.tab_operadora to2,
            dados_mobilidade.tab_operadora_linha tol,
            dados_mobilidade.tab_itinerario ti
        where
            tl.id_linha = tol.id_linha and
            tol.id_operadora = to2.id_operadora and
            tl.id_linha = ti.id_linha
        order by
            tl.cd_linha;
        `;

        const result = await this.dataSource.query(query);

        // Aplica a função utilitária para formatar o resultado
        return formatLinhasByOperadora(result);
    }
}
