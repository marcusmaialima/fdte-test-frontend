import React from 'react'
import Modal from 'react-bootstrap/Modal'

import * as S from './styled'
import pokebola from 'assets/images/pokeball.png'
import closeIcon from 'assets/images/close.png'
import {
  // returnColorForTypesPokemon,
  // translateTypesPokemon,
  translateAndColorTypesPokemon
} from 'helpers'

const ModalComponent = ({
  show,
  onClickCapturePokemon,
  closeModal,
  dataPokemon
}) => {
  const pokemon = dataPokemon[0]
  return (
    <S.Wrapper>
      <Modal
        dialogClassName="container__modalComponent animate__animated animate__bounce animate__fadeInUpBig"
        show={show}
        centered
        animation
      >
        <S.BackgroundColorFull>
          <S.ModalFull>
            <S.ModalBody>
              <S.ButtonClose onClick={closeModal}>
                <S.Icon src={closeIcon} />
              </S.ButtonClose>
              <S.DetailPokemon>
                <S.BadgePokemonTop>
                  <S.PokemonSprite src={pokemon?.pictureFront} />
                </S.BadgePokemonTop>
                <S.ContainerStatus>
                  <S.NamePokemon>{pokemon?.name}</S.NamePokemon>
                  <S.WrapperRow>
                    <S.BoxStatus>
                      <S.Title>HP</S.Title>
                      <S.Description>
                        {pokemon?.hp}/{pokemon?.hp}
                      </S.Description>
                    </S.BoxStatus>
                    <S.BoxStatus>
                      <S.Title>Altura</S.Title>
                      <S.Description>{pokemon?.height} m</S.Description>
                    </S.BoxStatus>
                    <S.BoxStatus>
                      <S.Title>Peso</S.Title>
                      <S.Description>{pokemon?.weight} kg</S.Description>
                    </S.BoxStatus>
                  </S.WrapperRow>
                  <S.RowLine>
                    <S.Line />
                    <S.TitleMid>TIPO</S.TitleMid>
                    <S.Line />
                  </S.RowLine>
                  <S.RowTypes>
                    {pokemon?.type.map((type) => {
                      const poke = translateAndColorTypesPokemon(type)
                      if (type) {
                        return (
                          <S.FlagType
                            key={poke.name + pokemon.id}
                            bgColor={poke.color}
                          >
                            {poke.name}
                          </S.FlagType>
                        )
                      }
                    })}
                  </S.RowTypes>
                  <S.RowLine>
                    <S.Line />
                    <S.TitleMid>HABILIDADES</S.TitleMid>
                    <S.Line />
                  </S.RowLine>
                  <S.RowTypes>
                    <S.Abilities>{pokemon?.abilities.join(', ')}</S.Abilities>
                  </S.RowTypes>
                </S.ContainerStatus>
              </S.DetailPokemon>
            </S.ModalBody>
          </S.ModalFull>
          <S.Pokebola src={pokebola} onClick={onClickCapturePokemon} />
        </S.BackgroundColorFull>
      </Modal>
    </S.Wrapper>
  )
}

export default ModalComponent
