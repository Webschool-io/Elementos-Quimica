module.exports = {
  simbolo: 'Rb',
  nome: 'Rubídio',
  numeroAtomico: 19,
  familia: [
    {
      coluna: '1'
    },
    {
      grupo: '1A'
    },
    {
      descritiva: 'Metal Alcalino'
    }
  ],
  periodo: 5,
  numero: {
    eletrons: 37,
    neutrons: 0,
    protons: 37
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2, p: 6
    },
    m: {
      s: 2, p: 6, d: 10
    },
    n: {
      s: 2, p: 6, d: 0, f: 0
    },
    o: {
      s: 1, p: 0, d: 0, f: 0
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
        valor: 1532,
        unidade: 'kg/m3'
      },
      estadodaMateria: {
        valor: 'gasoso'
      },
      raioAtomico: {
        valor: 248,
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 85.4678,
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-k'),
      estruturaCristalina: require('property-estrutura-cristalina-rb'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-rb'),
      pontoFusao: {
        valor: 312.46,
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {
        valor: 961,
        unidade: require('unity-k').unidade
      },
      raioCovalente: {
        valor: 211,
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {
        valor: 2.44,
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {
        valor: 2.191,
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {
        valor: 72.216,
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 434,
          unidade: require('unity-pa').unidade,
        }
      },
      calorEspecífico: {
        valor: 364,
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 58.2,
        unidade: 'W/(m·K)'
      }
    }
  }
}
