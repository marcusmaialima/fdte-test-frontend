import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import Logo from 'assets/images/pokemonLogo.png'

import * as S from './styled'

const HomePage = () => (
  <S.HomeWrapper>
    <S.LogoPokemon src={Logo} />
    <Link to="/map">
      <Button text="Start" />
    </Link>
  </S.HomeWrapper>
)

export default HomePage
