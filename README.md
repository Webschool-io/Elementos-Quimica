# Elementos da Química

Repositório com todos os elementos da Química e suas propriedades.

## Ideia

Mostrar os elementos da Química de forma m ais simples e usável do que a Tabela Periódica.

Nossa "tabela periódica" será, inicialmente, visualizada com os elementos separados em 3 categorias:

- Gasoso 💨
- Líquido💧
- Sólido 💎


Vai dizer que não fica mais simples pensar assim?

Nossa ideia é atualizar **e melhorar** a Tabela Periódica, pois não precisamos mais, necessariamente, utilizar ela como foi criada.

> Por quê?

Aí eu lhe pergunto:

> **Se você entrar em uma Tabela Periódica o que você fará? Não irá buscar alguma propriedade de algum elemento que você pode até não conhecer?**



Correto.



> **Agora imagine um Sistema Web onde você pudesse ter todas as informações de um elemento tanto no navegador, como no celular, como no sistema operacional.**

> **E que TODA informação fosse atualizada e criada pela comunidade de químicos?**

> **Não seria muito melhor?**



É...




> **E se você além de ter todas as informações dos elementos e suas moléculas ainda pudesse ter uma calculadora tipo HP, porém específica para Química?**

> ?**Quanto você pagaria para ter TODA essa informação??**


Nada.



> **Que bom! Pois esse é o valor que custará**.


## Separação dos Elementos

Para facilitar o entendimento dos elementos da Química separamos os elementos, inicialmente, em 3 grandes categorias, baseadas em seu estado da matéria:

- Gasoso 💨
- Líquido💧
- Sólido 💎


Logo após temos a seguinte separação:

- Gasoso 💨
    + Nobres
    + Comuns
- Líquido 💧
    + Ametal
    + Metal
- Sólido 💎
    + Ametal
    + Metal


## Padrão

Precisamos criar um padrão, *work in progress*, para que futuramente possa ser utilizada em qualquer linguagem.

Por isso eu e a [Franciele](https://github.com/fpchemical/) pensamos em colocar boa parte das propriedades dos elementos no JSON.

### Elemento

Vejamos esse exemplo do Hidrogênio:

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

Aposto que percebeu essa parte diferente:


```js
meiaVida: require('property-meiavida-h'),
estadoOxidacao: require('property-estado-oxidacao-h'),
estruturaCristalina: require('property-estrutura-cristalina-h'),
eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
```

Isso é porque já comecei a modularizar cada PROPRIEDADE para criar um módulo que será um GERADOR de propriedades para facilitar a criação dos outros elementos.

### Propriedades

Sim iremos ATOMIZAR cada propriedade para facilitar o reuso.

**SEMPRE PRECISA TER `valor`!** Pois é uma propriedade, isso é o **mínimo**.

O padrão, por hora, é:

```js
module.exports = {    
  valor: Any, // String or Number
  unidade: String,
  descricao: String, // default null
}
```

Vejamos alguns exemplos:

```js
// H-eletronegatividadePauling
module.exports = {    
  valor: 2.2, 
  unidade: 'eV',
  descricao: null
}
```

*ps: Sem descrição.*

```js
// H-estadoOxidacao
module.exports = {   
  valor: '1+',
  unidade: null,
  descricao: null
}
```

*ps: Sem descrição e unidade.*

```js
module.exports = {   
  valor: 12.3, 
  unidade: require('unity-a').unidade,
  descricao: null
}
```

*ps: Sem descrição porém importando a **unidade**.*

#### Metais

Essas são as propriedades dos **metais**:

- Condutibilidade
- Ductibilidade
- Maleabilidade
- Eletromagnetismo
- Ferromagnetismo
- Magnetismo
- Paramagnetismo
- momento magnético 
- radiação eletromagnética
- emissão espontânea 
- Ligantes
- permeabilidade magnética
- Susceptibilidade magnética 
- Campo magnético
- Física do estado sólido
- Função de onda
- Banda de valência 
- Banda de condução
- Entropia negativa
- Ondas eletromagnéticas 
- Carga Nuclear Efetiva
- Lei da conservação da carga 

### Unidades

Seguindo a lógica também modularizamos as **unidades** pois poderão ser reusadas.

O padrão é:

```js
module.exports = {
  unidade: String,
  nome: String,
  validate: Function,
  descricao: String
}
```

Exemplos:

```js
// K
module.exports = {
  unidade: 'K',
  nome: 'Kelvin',
  validate: (value) => true,
  descricao: 'Mede a temperatura absoluta'
}
```

```js
// a
module.exports = {
  unidade: 'a',
  nome: 'anos',
  validate: (value) => (value > 0),
  descricao: 'Picometro é bem pequeno'
}
```

```js
// Pa
module.exports = {
  unidade: 'Pa',
  nome: 'Pascal',
  validate: (value) => true,
  descricao: 'Mede a pressão'
}
```

```js
// pm
module.exports = {
  unidade: 'pm',
  nome: 'picômetro',
  valor: Math.pow(10, -6), // relativo ao metro
  validate: (value) => !isNaN(value),
  descricao: 'Picometro é bem pequeno'
}
```

## API

Obviamente teremos uma API para fornecer TODA a informação sobre os elementos e moléculas da Química.

Pensamos em facilitar a identificação dos elementos além do nome da sua categoria e tipo, trocarmos por **emojis** já existentes em qualquer celular.

**Gasoso**: 💨
- /api/atoms/gaseous
- /api/atoms/💨
- /api/👤/💨
- /api/molecules/💨
- /api/👥/💨

**Líquido**: 💧
- /api/atoms/liquid
- /api/atoms/💧
- /api/👤/💧
- /api/molecules/💧
- /api/👥/💧


**Sólido**: 💎
- /api/atoms/solids
- /api/atoms/💎
- /api/👤/💎
- /api/molecules/💎
- /api/👥/💎



## Moléculas

### Tipos

- Ácidos
- Bases
- Sais 
- Oxidos

### Propriedades


- NOME IUPAC
- NOME USUAL
- ESTADO DA COMPOSTO
- FORMA IÔNICA
- PROPRIEDADES FISICO-QUIMICAS:
  + Afinidade (tanto pelos atomos quanto pelo tipo da molecula)
  + Solubilidade (Kps)
  + Quantidade de materia (mol/L)
  + Geometria molecular
  + Estado de oxidação do atomo presente na molecula
  + Ponto de fusao
  + Ponto de ebulição
  + Valor da energia Livre de Gibs (deltah)
  + Valor da energia de entalpia
