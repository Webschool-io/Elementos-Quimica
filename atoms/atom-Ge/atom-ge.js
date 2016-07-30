module.exports = { 
  simbolo: 'Ge', 
  nome: 'Germânio',
  familia: [
    {
      coluna: '14'
    }, 
    {
      grupo: '4A'
    }, 
    {
      descritivo: 'No Family'
    }
  ], 
  periodo: 4, 
  numero: {
    eletrons: 32,
    neutrons: 0,
    protons: 32
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2,
      p: 6
    },
    m: {
      s: 2,
      p: 6,
      d: 10
    },
    n: {
      s: 2,
      p: 2,
      d: 0,
      f: 0
    },
    o: {
      s: 0,
      p: 0,
      d: 0,
      f: 0
    },
    p: {
      s: 0,
      p: 0,
      d: 0
    },
    q: {
      s: 0,
      p: 0
    }
  },
  propriedades: {
    fisicas: {
      densidade: {
        valor: 5323, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'Solid' 
      },
      raioAtomico: {
        valor: 122, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 72.64, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-ge'),
      estruturaCristalina: require('property-estrutura-cristalina-si'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
      raioCovalente: {   
        valor: 122, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 211, 
        unidade: require('unity-pm').unidade
      },
      entalpiadevaporizacao: {   
        valor: 334, 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: 320, 
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 59.9,
        unidade: 'W/(m·K)'
      } 
    }
  }
}