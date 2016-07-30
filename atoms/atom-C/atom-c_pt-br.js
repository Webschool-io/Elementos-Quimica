module.exports = { 
  simbolo: 'C', 
  nome: {
    'pt-br': 'Carbono',
    'en': 'Carbon',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '16'
    }, 
    {
      tipo: 'Grupo',
      valor: '4A'
    }, 
    {
      tipo: 'descritivo',
      valor: 'Sem familia'
    }
  ],
  periodo: 2, 
  massaAtomica: 12.0107,
  numero: {
    eletrons: 6,
    neutrons: 6,
    protons: 6
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
        nome: 'Densidade',
        valor: 0.2267,
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 70,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-h'),
      require('property-estrutura-cristalina-h'),
      require('property-eletronegatividade-de-pauling-h'),
      {   
        nome: 'raioCovalente',
        valor: 77,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 170, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 0.44936,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 710, 
        unidade: 'J/(kg·K)'
      },
      {   
        nome: 'condutividadeEletrica',
        valor: 0.061, 
        unidade: 'S/m'
      },
      {
        nome: 'condutividadeTermica',
        valor: 129,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}