/**
 * Função para formatar as posições no formato GeoJSON.
 * @param result - Array com as posições dos veículos do banco de dados
 * @returns Array formatado conforme o padrão GeoJSON
 */
export function formatPosicaoGeoJSON(result: any[]) {
    const groupedByOperadora = result.reduce((acc, item) => {
        const operadoraKey = item.nm_operadora;

        if (!acc[operadoraKey]) {
            acc[operadoraKey] = {
                type: "FeatureCollection", // Definindo o tipo para GeoJSON
                NomeOperadora: item.nm_operadora,
                features: [] // Para armazenar as "features" dos veículos
            };
        }

        // Formata a data no formato YYYY-MM-DD HH:mm:ss
        const formattedDate = formatDate(item.datalocal);

        // Adiciona um novo veículo como uma Feature no GeoJSON
        acc[operadoraKey].features.push({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [parseFloat(item.longitude), parseFloat(item.latitude)]
            },
            properties: {
                veiculo: {
                    prefixo: item.prefixo,   // Identificador do veículo
                    numero: item.numero,     // Número da linha
                },
                direcao: item.direcao,       // Direção em graus
                velocidade: item.velocidade, // Velocidade em m/s
                datalocal: formattedDate     // Mantém a data no formato YYYY-MM-DD HH:mm:ss
            }
        });

        return acc;
    }, {});

    // Retorna um array de FeatureCollections, um para cada operadora
    return Object.values(groupedByOperadora);
}

/**
 * Função para formatar a data em YYYY-MM-DD HH:mm:ss
 * @param dateString - A data no formato original
 * @returns A data formatada
 */
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses são indexados a partir de 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
