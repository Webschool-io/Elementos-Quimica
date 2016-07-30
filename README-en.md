# Elements of Chemistry

Repository with all the elements of chemistry and its properties.

[Read in Portuguese](https://github.com/Webschool-io/Elementos-Quimica/blob/master/README.md)

## Idea

Show the elements of chemistry more simply and usable than the Periodic Table.

Our "periodic table" will be initially displayed with the separate elements into 3 categories:

- Gaseous 💨
- Liquid💧
- Sólid 💎


It will say that is not easy to think so?

Our idea is to update and **improve** the Periodic Table, as we no longer necessarily use it as it was created.

> Why?

So I ask you:

> If you go into a periodic table what will you do? You will not get any property of any element that you might not even know?



Correct.



> Now imagine a Web system where you could have all the information of an element both in the browser, as in the cell, as the operating system.

> And that ALL information be updated and created by the chemical community?

> Would not it be better?



Yeah...




> And if you in addition to all the information of the elements and their molecules could still have an HP calculator type, but specific to chemistry?

> How much would you pay to have ALL this information ??


For I myself shall answer you:


> Nothing.


## Separation of the Elements

To facilitate the understanding of the chemistry of the elements separated the elements initially in three broad categories, based on their state of matter:

- Gaseous 💨
- Liquid💧
- Sólid 💎


Soon after we have the following split:

- Gaseous 💨
    + Noble
    + Common
- Liquid💧
    + Metal
    + Non-Metal
- Sólid 💎
    + Metal
    + Non-Metal


## Pattern

We need to create a pattern, *work in progress*, so that it can eventually be used in any language.

So I and [Franciele](https://github.com/fpchemical/) We think about putting much of the properties of elements in JSON.

### Element

Take the example of hydrogen:

```js
module.exports = { 
  simbolo: 'H', 
  nome: 'hidrogenio',
  familia: [
    {
      coluna: '1'
    }, 
    {
      grupo: '1A'
    }, 
    {
      descritivo: 'sem familia'
    }
  ], 
  periodo: 1, 
  numero: {
    eletrons: 1,
    neutrons: 0,
    protons: 1
  },
  distribuicaoEletronica: {
    k: {
      s: 1
    },
    l: {
      s: 0,
      p: 0
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
        valor: 0.0899, 
        unidade: 'kg/m3'
      },
      estadodaMateria: {   
        valor: 'gasoso' 
      },
      raioAtomico: {
        valor: 53, 
        unidade: 'pm'
      },
      massaAtomica: {
        valor: 1.00797, 
        unidade: 'u'
      }
    },
    quimicas: {
      meiaVida: require('property-meiavida-h'),
      estadoOxidacao: require('property-estado-oxidacao-h'),
      estruturaCristalina: require('property-estrutura-cristalina-h'),
      eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
      pontoFusao: {
        valor: 14.025, 
        unidade: require('unity-k').unidade
      },
      pontoEbulicao: {   
        valor: 20.268, 
        unidade: require('unity-k').unidade
      },
      energiaIonizacao: {   
        valor: 1312, 
        unidade: require('unity-kjXmol-1').unidade
      },
      raioCovalente: {   
        valor: 12.3, 
        unidade: require('unity-pm').unidade
      },
      raioVanderWaals: {   
        valor: 120, 
        unidade: require('unity-pm').unidade
      },
      entalpiadefusao: {   
        valor: 0.05868, 
        unidade: require('unity-kjXmol-1').unidade
      },
      entalpiadevaporizacao: {   
        valor: 0.44936, 
        unidade: require('unity-kjXmol-1').unidade
      },
      volumeMolar: {   
        valor: 0.0000114, 
        unidade: require('unity-kjXmol-1').unidade
      },
      pressaodeVapor: {
        pressao: {
          valor: 209, 
          unidade: require('unity-pa').unidade,
        },
        temperatura: {
          valor: 23, 
          unidade: require('unity-k').unidade,
        }
      },
      calorEspecífico: {   
        valor: 14304, 
        unidade: 'J/(kg·K)'
      },
      condutividadeEletrica: {   
        valor: 106, 
        unidade: 'S/m'
      },
      condutividadeTermica: {
        valor: 0.1815,
        unidade: 'W/(m·K)'
      } 
    }
  }
}
```

I bet you saw this different part:


```js
meiaVida: require('property-meiavida-h'),
estadoOxidacao: require('property-estado-oxidacao-h'),
estruturaCristalina: require('property-estrutura-cristalina-h'),
eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
```

That is why I have started to modularize each PROPERTY to create a module that will be a property GENERATOR to facilitate the creation of other elements.

### Properties

Yes, we ATOMIZE each property to facilitate reuse.

**ALWAYS NEED TO HAVE `value`!** It is a property, this is the **minimum**.

The default per hour is:

```js
module.exports = {    
  valor: Any, // String or Number
  unidade: String,
  descricao: String, // default null
}
```

Here are some examples:

```js
// H-eletronegatividadePauling
module.exports = {    
  valor: 2.2, 
  unidade: 'eV',
  descricao: null
}
```

*ps: Without description.*

```js
// H-estadoOxidacao
module.exports = {   
  valor: '1+',
  unidade: null,
  descricao: null
}
```

*ps: SWithout description and unity.*

```js
module.exports = {   
  valor: 12.3, 
  unidade: require('unity-a').unidade,
  descricao: null
}
```

*ps: No description but regardless of the  **Unity**.*

#### Metals

These are the properties of **Metals**:

- Conductivity
- Ductility
- Malleability
- Electromagnetism
- Ferromagnetism
- Magnetism
- Paramagnetism
- Magnetic moment
- electromagnetic radiation
- Spontaneous emission
- Ligands
- Magnetic permeability
- Magnetic Susceptibility
- Magnetic field
- Solid State Physics
- Wave function
- Valence band
- Driving Band
- Negative Entropy
- Electromagnetic waves
- Load Effective Nuclear
- Load Conservation Law

### Units

Following the logic will also modularize the **units** as they may be reused.

The default is:

```js
module.exports = {
  unidade: String,
  nome: String,
  validate: Function,
  descricao: String
}
```

Examples:

```js
// K
module.exports = {
  unidade: 'K',
  nome: 'Kelvin',
  validate: (value) => true,
  descricao: 'Measures absolute temperature'
}
```

```js
// a
module.exports = {
  unidade: 'a',
  nome: 'anos',
  validate: (value) => (value > 0),
  descricao: 'Picómeter is very small'
}
```

```js
// Pa
module.exports = {
  unidade: 'Pa',
  nome: 'Pascal',
  validate: (value) => true,
  descricao: 'Measures pressure'
}
```

```js
// pm
module.exports = {
  unidade: 'pm',
  nome: 'picômetro',
  valor: Math.pow(10, -6), // for the metro
  validate: (value) => !isNaN(value),
  descricao: 'Picómeter is very small'
}
```

## API

Obviously we will have an API to provide ALL information about the elements and molecules of chemistry.

Thought to facilitate the identification of elements in addition to the name of their category and type, change for existing **emoji** in any cell.

**Geseous**: 💨
- /api/atoms/gaseous
- /api/atoms/💨
- /api/👤/💨
- /api/molecules/💨
- /api/👥/💨

**Liquid**: 💧
- /api/atoms/liquid
- /api/atoms/💧
- /api/👤/💧
- /api/molecules/💧
- /api/👥/💧


**Solid**: 💎
- /api/atoms/solids
- /api/atoms/💎
- /api/👤/💎
- /api/molecules/💎
- /api/👥/💎



## Molecules

### Types

- Acids
- Bases
- Sais
- Oxides

### Properties


- NAME IUPAC
- USUAL NAME
- STATE OF THE COMPOUND
- FASHION IONIC
- PHYSICAL AND CHEMICAL PROPERTIES:
    + Affinity (both by atoms as the type of molecule)
    + Solubility (Ksp)
    + Material quantity (mol/L)
    + Molecular Geometry
    + State of this atom oxidation in the molecule
    + Melting point
    + Boiling point
    + Free energy value of Gibs (Deltah)
    + Value of energy enthalpy
