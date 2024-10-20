export function formatHorario(result: any[]) {
    const groupedByLinha = result.reduce((acc, item) => {
        const linhaKey = `${item.numero}-${item.sentido}`;

        if (!acc[linhaKey]) {
            acc[linhaKey] = {
                numero: item.numero,
                sentido: item.sentido,
                horarios: []
            };
        }

        const [hora, minuto] = item.horario.split(':');

        const horarioIndex = acc[linhaKey].horarios.findIndex(horario => horario.horario === item.horario);
        if (horarioIndex === -1) {
            acc[linhaKey].horarios.push({
                horario: item.horario,
                dia_label: item.dia_label,
                hora: hora,
                minuto: minuto,
                dias_semana: item.dias_semana,
                operadoras: item.operadora ? item.operadora.split(':') : []
            });
        } else {
            // Se o horário já existir, apenas adiciona novas operadoras, evitando duplicatas
            const operadorasExistentes = acc[linhaKey].horarios[horarioIndex].operadoras;
            const novasOperadoras = item.operadora ? item.operadora.split(':') : [];
            novasOperadoras.forEach(operadora => {
                if (!operadorasExistentes.includes(operadora)) {
                    operadorasExistentes.push(operadora);
                }
            });
        }

        return acc;
    }, {});

    return Object.values(groupedByLinha);
}
