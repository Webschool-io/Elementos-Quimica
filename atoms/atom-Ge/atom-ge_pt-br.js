module.exports = { 
  simbolo: 'Ge', 
  nome: {
    'pt-br': 'Germânio',
    'en': 'Germanium',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '14'
    }, 
    {
      tipo: 'Grupo',
      valor: '4A'
    }, 
    {
      tipo: 'Descritivo',
      valor: 'Sem Familia'
    }
  ],
  periodo: 4, 
  massaAtomica: 72.64,
  numero: {
    eletrons: 32,
    neutrons: 0,
    protons: 32
  },
  distribuicaoEletronica: {
    k: [
      {
        subnivel: 's',
        eletrons: 2
      }
    ],
    l: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      }
    ],
    m: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      },
      {
        subnivel: 'd',
        eletrons: 10
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 2
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
        nome: 'Densidade',
        valor: 5323, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 122,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-ge'),
      require('property-estrutura-cristalina-ge'),
      require('property-eletronegatividade-de-pauling-ge'),
      {   
        nome: 'raioCovalente',
        valor: 122,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 211, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 334,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 320, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 59.9,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}