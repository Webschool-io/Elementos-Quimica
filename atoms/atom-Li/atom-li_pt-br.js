module.exports = { 
  simbolo: 'Li', 
  nome: {
    'pt-br': 'Litio',
    'en': 'Lithium',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '3'
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
  periodo: 2, 
  massaAtomica: 6.941,
  numero: {
    eletrons: 3,
    neutrons: 0,
    protons: 3
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
        eletrons: 1
      },
      {
        subnivel: 'p',
        eletrons: 0
      }
    ],
    m: [
      {
        subnivel: 's',
        eletrons: 0
      },
      {
        subnivel: 'p',
        eletrons: 0
      },
      {
        subnivel: 'd',
        eletrons: 0
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 0
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
        valor: 535, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 152,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-li'),
      require('property-estrutura-cristalina-li'),
      require('property-eletronegatividade-de-pauling-li'),
      {   
        nome: 'raioCovalente',
        valor: 134,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 182, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 145.92,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 3582, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 84.7,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}