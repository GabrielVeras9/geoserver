/**
 * Função para formatar os dados de paradas no formato GeoJSON.
 * @param result - Array com as paradas do banco de dados
 * @returns Array formatado conforme o padrão GeoJSON
 */
export function formatParadasGeoJSON(result: any[]) {
    const formattedParadas = {
        type: "FeatureCollection",
        features: result.map((item) => ({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [
                    parseFloat(item.longitude), // Longitude vem primeiro no GeoJSON
                    parseFloat(item.latitude)   // Latitude vem em segundo
                ]
            },
            properties: {
                sequencial: item.id,          // Identificador único da parada
                sentido: item.sentido,        // Sentido da linha ou localização (ex: BAIRRO-CENTRO)
                codDftrans: item.codigo       // Código da parada (codDftrans ou outro identificador)
            }
        }))
    };

    return formattedParadas;
}
