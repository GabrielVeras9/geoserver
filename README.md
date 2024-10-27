Documentação de uso da base de 
dados da Secretaria de mobilidade e 
transporte público do DF (SEMOB-DF) 

Esta documentação apresenta o uso das bases de dados da Secretaria de 
Mobilidade e Transporte Público do Distrito Federal. O documento é destinado a 
diversos órgãos, empresas e também para fins acadêmicos. O acesso é 
totalmente amplo e aberto à população do Distrito Federal e regiões adjacentes. 
Atualmente, contamos com dois principais portais de dados públicos: 

1. Geomobi: Um portal em Geoserver que contém informações sobre a frota 
por operadora, linhas de ônibus, paradas, última posição transmitida e 
viagens programadas por linha. O Geoserver oferece uma ampla 
variedade de tipos de dados, incluindo TXT, Point, LineString, 
OpenStreet, GeoJSON, JSON, entre outros. Segue abaixo a lista dos 
endpoints.

 Frota por operadora: 
geoserver.semob.df.gov.br/geoserver/semob/ows?service=WFS&
 version=1.0.0&request=GetFeature&typeName=semob%3AFrota 
por Operadora&outputFormat=application%2Fjson 

 Linhas de ônibus: 
geoserver.semob.df.gov.br/geoserver/semob/ows?service=WFS&
 version=1.0.0&request=GetFeature&typeName=semob%3ALinha
 s de onibus&outputFormat=application%2Fjson 
 
 Paradas de ônibus: 
geoserver.semob.df.gov.br/geoserver/semob/ows?service=WFS&
 version=1.0.0&request=GetFeature&typeName=semob%3AParad
 as de onibus&outputFormat=application%2Fjson 
 
 Última Posição Transmitida: 
geoserver.semob.df.gov.br/geoserver/semob/ows?service=WFS&
 version=1.0.0&request=GetFeature&typeName=semob%3AUltima 
Posicao Transmitida&outputFormat=application%2Fjson 

 Viagens Programadas por Linha: 
geoserver.semob.df.gov.br/geoserver/semob/ows?service=WFS&
 version=1.0.0&request=GetFeature&typeName=semob%3AViage
 ns Programadas por Linha&outputFormat=application%2Fjson 
 
3. Dados.semob: Esta API contém informações sobre linhas, horários, 
posições, itinerários espaciais, paradas e operadoras. Os endpoint’s de 
paradas, posições e itinerários espaciais estão no formato GeoJSON, 
enquanto os endpoint’s de linhas, operadoras e horários estão no formato 
JSON. Esta API permite consultas gerais sem a necessidade de filtros de 
busca nos endpoint’s. Segue abaixo a lista dos endpoint’s:

 Linhas por operadora: dados.semob.df.gov.br/numeros 

 Horários por linha: dados.semob.df.gov.br/horario 

 Parada de ônibus: dados.semob.df.gov.br/parada 

 Frota por operadora: dados.semob.df.gov.br/operadora 

 Itinerário espacial por linha: dados.semob.df.gov.br/espaciais 

 Posição transmitida: dados.semob.df.gov.br/posicao
