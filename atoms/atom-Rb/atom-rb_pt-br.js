module.exports = { 
  simbolo: 'Rb', 
  nome: {
    'pt-br': 'Rubídio',
    'en': 'Rubidium',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '1'
    }, 
    {
      tipo: 'Grupo',
      valor: '1A'
    }, 
    {
      tipo: 'Descritivo',
      valor: 'Metal Alcalino'
    }
  ],
  periodo: 5, 
  massaAtomica: 85.4678,
  numero: {
    eletrons: 37,
    neutrons: 0,
    protons: 37
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
        eletrons: 6
      }
    ],
    o: [
      {
        subnivel: 's',
        eletrons: 1
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
        valor: 1532, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 248,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-k'),
      require('property-estrutura-cristalina-rb'),
      require('property-eletronegatividade-de-pauling-rb'),
      {   
        nome: 'raioCovalente',
        valor: 211,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 2.44, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 72.216,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 364, 
        unidade: 'J/(kg·C)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 58.2,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}