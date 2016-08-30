module.exports = {
  simbolo: 'Li',
  nome: 'Litio',
  numeroAtomico: 11,
  familia: [
    {
      coluna: '3'
    },
    {
      grupo: '1A'
    },
    {
      descritiva: 'Metal Alcalino'
    }
  ],
  periodo: 2,
  numero: {
    eletrons: 3,
    neutrons: 0,
    protons: 3
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 1, p: 0
    },
    m: {
      s: 0, p: 0, d: 0
    },
    n: {
      s: 0, p: 0, d: 0, f: 0
    },
    o: {
      s: 0, p: 0, d: 0, f: 0
    },
    p: {
      s: 0, p: 0, d: 0
    },
    q: {
      s: 0, p: 0
    }
  },
  propriedades: {
    fisicas: {
      densidade: {
        valor: 535,
        unidade: 'kg/m3'
      },
      estadodaMateria: {
        valor: 'gasoso'
      },
      raioAtomico: {
        valor: 152,
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 6.941,
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-li'),
      estruturaCristalina: require('property-estrutura-cristalina-li'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-li'),
      pontoFusao: {
        valor: 453,
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {
        valor: 1615,
        unidade: require('unity-k').unidade
      },
      raioCovalente: {
        valor: 134,
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {
        valor: 182,
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {
        valor: 3,
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {
        valor: 145.92,
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 1.63,
          unidade: require('unity-pa').unidade,
        },
      },
      calorEspecífico: {
        valor: 3582,
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 84.7,
        unidade: 'W/(m·K)'
      }
    }
  }
}
