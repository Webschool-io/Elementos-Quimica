module.exports = { 
  simbolo: 'H', 
  nome: {
    'pt-br': 'hidrogenio',
    'en': 'hydrogen',
  },
  familia: [
    {
      tipo: 'coluna',
      valor: '1'
    }, 
    {
      tipo: 'grupo',
      valor: '1A'
    }, 
    {
      tipo: 'descritivo',
      valor: 'sem familia'
    }
  ], 
  periodo: 1, 
  massaAtomica: 1.00797,
  numero: {
    eletrons: 1,
    neutrons: 0,
    protons: 1
  },
  distribuicaoEletronica: {
    k: [
      {
        subnivel: 's',
        eletrons: 1
      }
    ],
    l: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    m: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    o: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    p: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    q: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
  },
  propriedades: {
    fisicas: [
      {   
        nome: 'densidade',
        valor: 0.0899, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'gasoso' 
      },
      {   
        nome: 'raioAtomico',
        valor: 53,
      }
    ],
    quimicas: [ 
      require('property-meiavida-h'),
      require('property-estado-oxidacao-h'),
      require('property-estrutura-cristalina-h'),
      require('property-eletronegatividade-de-pauling-h'),
      {   
        nome: 'pontoFusao',
        valor: 14.025, 
        unidade: require('unity-k').unidade
      },
      {   
        nome: 'pontoEbulicao',
        valor: 20.268, 
        unidade: require('unity-k').unidade
      },
      {   
        nome: 'energiaIonização',
        valor: 1312, 
        unidade: require('unity-kjXmol-1').unidade
      },,
      {   
        nome: 'raioCovalente',
        valor: 12.3, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 120, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadefusao',
        valor: 0.05868, 
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 0.44936, 
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'volumeMolar',
        valor: 0.0000114, 
        unidade: require('unity-kjXmol-1').unidade
      },
      {
        nome: 'pressaodeVapor',
        valor: 209, 
        unidade: require('unity-pa').unidade,
        tipo: 'pressao'
      },
      {
        valor: 23, 
        unidade: require('unity-k').unidade,
        tipo: 'temperatura'
      },
      {   
        nome: 'calorEspecífico',
        valor: 14304, 
        unidade: 'J/(kg·K)'
      },
      {   
        nome: 'condutividadeEletrica',
        valor: 106, 
        unidade: 'S/m'
      },
      {
        nome: 'condutividadeTermica',
        valor: 0.1815,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}