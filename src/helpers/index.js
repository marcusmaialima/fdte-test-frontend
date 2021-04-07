function getRandomNumber(numberMin, numberMax) {
  return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin
}

function translateTypesPokemon(types) {
  const translate = {
    normal: 'normal',
    bug: 'inseto',
    dark: 'noturno',
    dragon: 'dragão',
    eletric: 'elétrico',
    fairy: 'fada',
    fighting: 'lutador',
    fire: 'fogo',
    flying: 'voador',
    ghost: 'fantasma',
    grass: 'grama',
    ground: 'terrestre',
    ice: 'gelo',
    poison: 'veneno',
    psychic: 'psíquico',
    rock: 'pedra',
    steel: 'aço',
    water: 'água'
  }

  return translate[types]
}

function returnColorForTypesPokemon(types) {
  const color = {
    normal: '#c4c0b4',
    bug: '#87950c',
    dark: '#413831',
    dragon: '#7361d1',
    eletric: '#e08d00',
    fairy: '#e29fe6',
    fighting: '#852816',
    fire: '#cf2c03',
    flying: '#8fa4ff',
    ghost: '#6969af',
    grass: '#67af32',
    ground: '#c5a455',
    ice: '#b4edf8',
    poison: '#924990',
    psychic: '#e25484',
    rock: '#5e491c',
    steel: '#7f8488',
    water: '#3b9bf1'
  }

  return color[types]
}

export { getRandomNumber, translateTypesPokemon, returnColorForTypesPokemon }
