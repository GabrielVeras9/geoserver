export function formatOperadoraVeiculos(result: any[]) {
    const groupedByOperadora = result.reduce((acc, item) => {
        const operadoraKey = item.idoperadora;
        
        if (!acc[operadoraKey]) {
            acc[operadoraKey] = {
                IdOperadora: item.idoperadora,
                NomeOperadora: item.nomeoperadora,
                veiculos: []
            };
        }

        acc[operadoraKey].veiculos.push({
            placa: item.placa,
            modelo: item.modelo,
            marca: item.marca,
            cor: item.cor,
            tipo: item.tipo,
            fabricacao: item.fabricacao,
            prefixo: item.prefixo
        });

        return acc;
    }, {});

    return Object.values(groupedByOperadora);
}
