module.exports = { 
  simbolo: 'Pb', 
  nome: 'Chumbo',
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
  periodo: 6, 
  numero: {
    eletrons: 82,
    neutrons: 0,
    protons: 82
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
      p: 6,
      d: 10,
      f: 14
    },
    o: {
      s: 2,
      p: 6,
      d: 10,
      f: 0
    },
    p: {
      s: 2,
      p: 2,
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
        valor: 11340, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'Solid' 
      },
      raioAtomico: {
        valor: 154, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 207.2, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-pb'),
      estruturaCristalina: require('property-estrutura-cristalina-pb'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-pb'),
      raioCovalente: {   
        valor: 147, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 202, 
        unidade: require('unity-pm').unidade
      },
      entalpiadevaporizacao: {   
        valor: 4.799, 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: '4,81×106 m−1', 
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 66.6,
        unidade: 'W/(m·K)'
      } 
    }
  }
}