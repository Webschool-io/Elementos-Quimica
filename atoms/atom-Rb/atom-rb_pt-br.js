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
  periodo: 4, 
  massaAtomica: 39.0983,
  numero: {
    eletrons: 19,
    neutrons: 0,
    protons: 19
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
        eletrons: 2
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
        eletrons: 0
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 1
      },
      {
        subnivel: 'p',
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
        nome: 'Densidade',
        valor: 856, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 243,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-k'),
      require('property-estrutura-cristalina-k'),
      require('property-eletronegatividade-de-pauling-k'),
      {   
        nome: 'raioCovalente',
        valor: 196,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 275, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 79.87,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 3582, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 102.4,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}