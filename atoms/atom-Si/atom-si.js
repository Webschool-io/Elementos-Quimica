module.exports = { 
  simbolo: 'Si', 
  nome: 'Silicon',
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
  periodo: 3, 
  numero: {
    eletrons: 14,
    neutrons: 0,
    protons: 14
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
      p: 2,
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
        valor: 2330, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'Solid' 
      },
      raioAtomico: {
        valor: 111, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 28.0855, 
        unidade: 'u'
      }
    },
    quimicas: {
      estadoOxidacao: require('property-estado-oxidacao-si'),
      estruturaCristalina: require('property-estrutura-cristalina-si'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-si'),
      raioCovalente: {   
        valor: 111, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 210, 
        unidade: require('unity-pm').unidade
      },
      entalpiadevaporizacao: {   
        valor: 384.22 , 
        unidade: require('unity-kjXmol-1').unidade
      },
      calorEspecífico: {   
        valor: 700, 
        unidade: 'J/(kg·K)'
      },
      condutividadeTermica: {
        valor: 148,
        unidade: 'W/(m·K)'
      } 
    }
  }
}