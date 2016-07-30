# Atoms - Pb

Behold the Lead!

In this *atomic* module we have a lot of data about the Pb.

## Structure

```js
module.exports = { 
  simbolo: 'Pb', 
  nome: {
    'pt-br': 'Chumbo',
    'en': 'Lead',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '14'
    }, 
    {
      tipo: 'Grupo',
      valor: '4A'
    }, 
    {
      tipo: 'Descritivo',
      valor: 'Sem Familia'
    }
  ],
  periodo: 6, 
  massaAtomica: 207.2,
  numero: {
    eletrons: 82,
    neutrons: 0,
    protons: 82
  },
  distribuicaoEletronica: {
    k: [
      {
        subnivel: 's',
        eletrons: 2
      }
    ],
    l: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      }
    ],
    m: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      },
      {
        subnivel: 'd',
        eletrons: 10
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      },
      {
        subnivel: 'd',
        eletrons: 10
      },
      {
        subnivel: 'f',
        eletrons: 14
      }
    ],
    o: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 6
      },
      {
        subnivel: 'd',
        eletrons: 10
      }
    ],
    p: [
      {
        subnivel: 's',
        eletrons: 2
      },
      {
        subnivel: 'p',
        eletrons: 2
      }
    ],
    q: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
  },
  propriedades: {
    fisicas: [
      {   
        nome: 'Densidade',
        valor: 11340, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 154,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-pb'),
      require('property-estrutura-cristalina-pb'),
      require('property-eletronegatividade-de-pauling-pb'),
      {   
        nome: 'raioCovalente',
        valor: 147,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 202, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 4.799,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: '4,81×106 m−1', 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 66.6,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}
```

Autor: [gkal19](https://github.com/gkal19/)
