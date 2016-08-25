# Atoms - Na

Behold the Sodium!

In this *atomic* module we have a lot of data about the Na.

## Structure

```js
module.exports = { 
  simbolo: 'Na', 
  nome: {
    'pt-br': 'Sódio',
    'en': 'Sodium',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '1'
    }, 
    {
      tipo: 'Grupo',
      valor: '1A'
    }, 
    {
      tipo: 'Descritivo',
      valor: 'Metal Alcalino'
    }
  ],
  periodo: 2, 
  massaAtomica: 22.98976928,
  numero: {
    eletrons: 11,
    neutrons: 11,
    protons: 11
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
        eletrons: 1
      },
      {
        subnivel: 'p',
        eletrons: 0
      },
      {
        subnivel: 'd',
        eletrons: 0
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 0
      },
      {
        subnivel: 'p',
        eletrons: 0
      }
    ],
    o: [
      {
        subnivel: 's',
        eletrons: 0
      }
    ],
    p: [
      {
        subnivel: 's',
        eletrons: 0
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
        valor: 968, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 186,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-na'),
      require('property-estrutura-cristalina-na'),
      require('property-eletronegatividade-de-pauling-na'),
      {   
        nome: 'raioCovalente',
        valor: 154,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'raioVanderWaals',
        valor: 227, 
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 96.96,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 1320, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 141,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}
```

Autor: [gkal19](https://github.com/gkal19/)
