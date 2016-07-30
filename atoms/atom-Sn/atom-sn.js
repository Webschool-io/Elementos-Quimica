module.exports = { 
  simbolo: 'Sn', 
  nome: 'Estanho',
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
  periodo: 5, 
  numero: {
    eletrons: 50,
    neutrons: 0,
    protons: 50
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
      f: 0
    },
    o: {
      s: 2,
      p: 2,
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
        valor: 7310, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'Solid' 
      },
      raioAtomico: {
        valor: 140, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 118.710, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-sn'),
      estruturaCristalina: require('property-estrutura-cristalina-sn'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-sn'),
      raioCovalente: {   
        valor: 139, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 217, 
        unidade: require('unity-pm').unidade
      },
      entalpiadevaporizacao: {   
        valor: 296.1, 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: 228, 
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 66.6,
        unidade: 'W/(m·K)'
      } 
    }
  }
}