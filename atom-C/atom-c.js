module.exports = { 
  simbolo: 'C', 
  nome: 'Carbon',
  familia: [
    {
      coluna: '16'
    }, 
    {
      grupo: '4A'
    }, 
    {
      descritivo: 'No Family'
    }
  ], 
  periodo: 2, 
  numero: {
    eletrons: 6,
    neutrons: 6,
    protons: 6
  },
  distribuicaoEletronica: {
    k: {
      s: 2
    },
    l: {
      s: 2,
      p: 2
    },
    m: {
      s: 0,
      p: 0,
      d: 0
    },
    n: {
      s: 0,
      p: 0,
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
        valor: 0.2267, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'Solid' 
      },
      raioAtomico: {
        valor: 70, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 12.0107, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: {
        valor: 4
      },
      eletronegatividadePauling: {
        valor: 2.55
      },
      raioCovalente: {   
        valor: 77, 
        unidade: 'pm'
      },
      raioVanderWaals: {   
        valor: 170, 
        unidade: 'pm'
      },
      entalpiadevaporizacao: {   
        valor: 0.44936, 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: 710, 
        unidade: 'J/(kg·K)'
      },
      condutividadeEletrica: {   
        valor: 0.061, 
        unidade: 'S/m'
      },
      condutividadeTermica: {
        valor: 129,
        unidade: 'W/(m·K)'
      } 
    }
  }
}