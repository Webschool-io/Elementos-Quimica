# Atoms - Fe

Behold the Iron!

In this *atomic* module we have a lot of data about the Fe.

## Structure

```js

module.exports = { 
  simbolo: 'Fe', 
  nome: {
    'pt-br': 'Ferro',
    'en': 'Iron',
  },
  familia: [
    {
      tipo: 'Coluna',
      valor: '8'
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
  periodo: 4, 
  massaAtomica: 55.845,
  numero: {
    eletrons: 26,
    neutrons: 0,
    protons: 26
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
        eletrons: 6
      }
    ],
    n: [
      {
        subnivel: 's',
        eletrons: 2
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
        valor: 7874, 
        unidade: 'kg/m3'
      },
      {   
        nome: 'estadodaMateria',
        valor: 'Sólido' 
      },
      {   
        nome: 'raioAtomico',
        valor: 140,
      }
    ],
    quimicas: [ 
      require('property-estado-oxidacao-fe'),
      require('property-estrutura-cristalina-fe'),
      require('property-eletronegatividade-de-pauling-fe'),
      {   
        nome: 'raioCovalente',
        valor: 125,
        unidade: require('unity-pm').unidade
      },
      {   
        nome: 'entalpiadevaporizacao',
        valor: 334,
        unidade: require('unity-kjXmol-1').unidade
      },
      {   
        nome: 'calorEspecífico',
        valor: 440, 
        unidade: 'J/(kg·K)'
      },
      {
        nome: 'condutividadeTermica',
        valor: 80.2,
        unidade: 'W/(m·K)'
      } 
    ]
  }
}

```

Autor: [gkal19](https://github.com/gkal19/)
