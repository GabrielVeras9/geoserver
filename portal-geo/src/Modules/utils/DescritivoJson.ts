export function formatItinerarioResponse(result: any[]) {
    const groupedBySentido = result.reduce((acc, item) => {
        const sentido = item.sentido;
        if (!acc[sentido]) {
            acc[sentido] = [];
        }
        acc[sentido].push(item);
        return acc;
    }, {});

    const formattedResponse = Object.keys(groupedBySentido).map(sentido => {
        const itinerario = groupedBySentido[sentido].map(item => ({
            sequencial: item.nm_sequencia,
            via: item.nm_via,
            localidade: item.localidade,
        }));

        return {
            origem: groupedBySentido[sentido][0].origem,
            destino: groupedBySentido[sentido][0].destino,
            sentido: sentido,
            extensao: groupedBySentido[sentido][0].extensao,
            itinerario: itinerario,
        };
    });

    return formattedResponse;
}
