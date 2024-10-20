export function formatPercurso(result: any[]) {
    return result.map(item => ({
        Numero: item.cd_linha,
        Sentido: item.lin_sentido,
        GeoLinhas: isValidJson(item.geo_linhas) ? JSON.parse(item.geo_linhas) : item.geo_linhas // Checa se é JSON
    }));
}

// Função para validar se o valor é JSON
function isValidJson(value: string) {
    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
}
