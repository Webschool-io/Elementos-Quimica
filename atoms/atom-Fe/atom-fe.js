module.exports = { 
  simbolo: 'Fe', 
  nome: 'Ferro',
  familia: [
    {
      coluna: '8'
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
    eletrons: 26,
    neutrons: 0,
    protons: 26
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
      d: 6
    },
    n: {
      s: 2,
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
        valor: 7874, 
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
        valor: 55.845, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-fe'),
      estruturaCristalina: require('property-estrutura-cristalina-fe'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-fe'),
      raioCovalente: {   
        valor: 125, 
        unidade: require('unity-pm').unidade
      },
      entalpiadevaporizacao: {   
        valor: 334, 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: 440, 
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 80.2,
        unidade: 'W/(m·K)'
      } 
    }
  }
}