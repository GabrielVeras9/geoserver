/* eslint-disable prettier/prettier */
export default () => ({
  gps: {
    marechal: {
      id: 'marechal',
      scheme: 'https',
      host: 'its00480.itstransdata.com',
      hostheader: 'its00480.itstransdata.com',
      port: 443,
      path: '/ITS-InfoExport_5F4072FB-377B-4A6D-9550-281568D8EDEA/api/Data/VeiculosGTFS',
    },

    piracicabana: {
      id: 'piracicabana',
      scheme: 'http',
      host: 'servicos.cittati.com.br',
      hostheader: 'servicos.cittati.com.br',
      port: 80,
      path: '/WSIntegracaoCittati/DFTrans/Veiculos/VPDF',
    },

    pioneira: {
      id: 'pioneira',
      scheme: 'https',
      host: 'its00078.itstransdata.com',
      hostheader: 'its00078.itstransdata.com',
      port: 443,
      path: '/ITS-InfoExport_CA06FCF3-D34E-4567-B069-153EA5085D80/api/Data/VeiculosGTFS?AspxAutoDetectCookieSupport=1',
    },

    bsbus: {
      id: 'bsbus',
      scheme: 'https',
      host: 'servicos.cittati.com.br',
      hostheader: 'servicos.cittati.com.br',
      port: 443,
      path: '/WSIntegracaoCittati/DFTrans/Veiculos/ESJO',
    },
    
    urbi: {
      id: 'urbi',
      scheme: 'https',
      host: 'servicos.cittati.com.br',
      hostheader: 'servicos.cittati.com.br',
      port: 80,
      path: '/WSIntegracaoCittati/DFTrans/Veiculos',
    },
  },
});
