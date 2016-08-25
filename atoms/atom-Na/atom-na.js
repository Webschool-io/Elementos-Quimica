module.exports = {
  simbolo: 'Na',
  nome: 'Sódio',
  numeroAtomico: 11,
  familia: [
    {
      coluna: '1'
    },
    {
      grupo: '1A'
    },
    {
      descritiva: 'Metal alcalino'
    }
  ],
  periodo: 2,
  numero: {
    eletrons: 11,
    neutrons: 11,
    protons: 11
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2, p: 6
    },
    m: {
      s: 1, p: 0, d: 0
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
        valor: 968,
        unidade: 'kg/m3'
      },
      estadodaMateria: {
        valor: 'gasoso'
      },
      raioAtomico: {
        valor: 186,
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 22.98976928,
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-na'),
      estruturaCristalina: require('property-estrutura-cristalina-na'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-na'),
      pontoFusao: {
        valor: 370.95,
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {
        valor: 1156,
        unidade: require('unity-k').unidade
      },
      raioCovalente: {
        valor: 154,
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {
        valor: 227,
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {
        valor: 2.598,
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {
        valor: 96.96,
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 1,
          unidade: require('unity-pa').unidade,
        },
        temperatura: {
          valor: 554,
          unidade: require('unity-k').unidade,
        }
      },
      calorEspecífico: {
        valor: 1230,
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 141,
        unidade: 'W/(m·K)'
      }
    }
  }
}
