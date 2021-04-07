import React from 'react'
import { useStore } from 'react-redux'

import Button from 'components/Button'

import iconPlus from 'assets/images/plus.png'

import * as S from './styled'

const Sidebar = () => {
  const store = useStore().getState()
  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {store.pokedex?.capturePokemon.length > 0
          ? store.pokedex?.capturePokemon.map((poke) => {
              return (
                <S.SideBarItem key={poke.id}>
                  <S.PokemonImage src={poke.pictureFront} />
                </S.SideBarItem>
              )
            })
          : null}
      </S.SideBarList>

      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  )
}

export default Sidebar
