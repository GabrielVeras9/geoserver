export function formatLinhasByOperadora(result: any[]) {
    const groupedByLinha = result.reduce((acc, item) => {
        const linhaKey = `${item.numero}-${item.sentido}`; // Preserva a distinção por linha e sentido

        if (!acc[linhaKey]) {
            acc[linhaKey] = {
                numero: item.numero,
                descricao: item.descricao,
                sentido: item.sentido,
                tarifa: item.tarifa,
                faixaTarifaria: item.FaixaTarifaria,
                operadoras: []
            };
        }

        // Verifica se a operadora já existe na lista de operadoras
        const operadoraExists = acc[linhaKey].operadoras.find(
            (operadora) => operadora.id_operadora === item.id_operadora
        );

        // Só adiciona a operadora se ela não existir
        if (!operadoraExists) {
            acc[linhaKey].operadoras.push({
                id_operadora: item.id_operadora,
                nome: item.operadora
            });
        }

        return acc;
    }, {});

    return Object.values(groupedByLinha);
}
