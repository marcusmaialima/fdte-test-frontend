function getRandomNumber(numberMin, numberMax) {
  return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin
}

function translateAndColorTypesPokemon(type) {
  const typesPokemon = {
    normal: () => {
      return {
        name: 'normal',
        color: '#c4c0b4'
      }
    },
    bug: () => {
      return {
        name: 'inseto',
        color: '#87950c'
      }
    },
    dark: () => {
      return {
        name: 'noturno',
        color: '#413831'
      }
    },
    dragon: () => {
      return {
        name: 'dragão',
        color: '#7361d1'
      }
    },
    eletric: () => {
      return {
        name: 'elétrico',
        color: '#e08d00'
      }
    },
    fairy: () => {
      return {
        name: 'fada',
        color: '#e29fe6'
      }
    },
    fighting: () => {
      return {
        name: 'lutador',
        color: '#852816'
      }
    },
    fire: () => {
      return {
        name: 'fogo',
        color: '#cf2c03'
      }
    },
    flying: () => {
      return {
        name: 'voador',
        color: '#8fa4ff'
      }
    },
    ghost: () => {
      return {
        name: 'fantasma',
        color: '#6969af'
      }
    },
    grass: () => {
      return {
        name: 'grama',
        color: '#67af32'
      }
    },
    ground: () => {
      return {
        name: 'terrestre',
        color: '#c5a455'
      }
    },
    ice: () => {
      return {
        name: 'gelo',
        color: '#b4edf8'
      }
    },
    poison: () => {
      return {
        name: 'veneno',
        color: '#924990'
      }
    },
    psychic: () => {
      return {
        name: 'psíquico',
        color: '#e25484'
      }
    },
    rock: () => {
      return {
        name: 'pedra',
        color: '#5e491c'
      }
    },
    steel: () => {
      return {
        name: 'aço',
        color: '#7f8488'
      }
    },
    water: () => {
      return {
        name: 'água',
        color: '#3b9bf1'
      }
    }
  }

  return typesPokemon[type]()
}

export { getRandomNumber, translateAndColorTypesPokemon }
