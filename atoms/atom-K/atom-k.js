module.exports = {
  simbolo: 'K',
  nome: 'Potássio',
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
  periodo: 4,
  numero: {
    eletrons: 19,
    neutrons: 0,
    protons: 19
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2, p: 6
    },
    m: {
      s: 2, p: 6, d: 0
    },
    n: {
      s: 1, p: 0, d: 0, f: 0
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
        valor: 856,
        unidade: 'kg/m3'
      },
      estadodaMateria: {
        valor: 'gasoso'
      },
      raioAtomico: {
        valor: 243,
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 39.0983,
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-k'),
      estruturaCristalina: require('property-estrutura-cristalina-k'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-k'),
      pontoFusao: {
        valor: 336.53,
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {
        valor: 1032,
        unidade: require('unity-k').unidade
      },
      raioCovalente: {
        valor: 196,
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {
        valor: 275,
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {
        valor: 2.334,
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {
        valor: 79.87,
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: '1.06x10',
          unidade: require('unity-pa').unidade,
        }
      },
      calorEspecífico: {
        valor: 336.5,
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 102.4,
        unidade: 'W/(m·K)'
      }
    }
  }
}
