module.exports = { 
  simbolo: 'Si', 
  nome: {
    'pt-br': 'Silício',
    'en': 'Silicon',
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
  periodo: 3, 
  massaAtomica: 28.0855,
  numero: {
    eletrons: 14,
    neutrons: 0,
    protons: 14
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
        eletrons: 2
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
        nome: 'Densidade',
        valor: 2330, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 111,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-si'),
      require('property-estrutura-cristalina-si'),
      require('property-eletronegatividade-de-pauling-h'),
      {   
        nome: 'raioCovalente',
        valor: 111,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 210, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 384.22,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 700, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 148,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}