module.exports = { 
  simbolo: 'Sn', 
  nome: {
    'pt-br': 'Estanho',
    'en': 'Tin',
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
  periodo: 5, 
  massaAtomica: 118.710,
  numero: {
    eletrons: 50,
    neutrons: 0,
    protons: 50
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
      },
      {
        subnivel: 'd',
        eletrons: 10
      }
    ],
    o: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 2
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
        valor: 7310, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 140,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-sn'),
      require('property-estrutura-cristalina-sn'),
      require('property-eletronegatividade-de-pauling-sn'),
      {   
        nome: 'raioCovalente',
        valor: 139,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 217, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 296.1,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 228, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 66.6,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}