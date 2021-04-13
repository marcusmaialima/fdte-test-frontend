import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'

import Sidebar from 'components/Sidebar'
import ModalComponent from 'components/Modal'

import * as S from './styled'
import ashFront from 'assets/images/ashFront.png'
import ashWalking from 'assets/images/ashWalking.gif'
import searchTooltip from 'assets/images/searchTooltip.png'
import searchingTooltip from 'assets/images/searchingTooltip.png'
import tooltipError from 'assets/images/tooltipError.png'
import { getRandomNumber } from 'helpers/index'
import {
  requestPokemon,
  openCloseModal,
  removePokemon,
  addPokemon
} from 'config/store/pokemon/index'

const MapPage = () => {
  const [imageBallon, setImageBallon] = useState('')
  const [topBallon, setTopBallon] = useState('6%')
  const [opacityImage, setOpacityImage] = useState(0)
  const [walking, setWalking] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [idPokemon, setIdPokemon] = useState(null)

  const dispatch = useDispatch()
  const pokedex = useSelector((state) => state.pokedex)
  const store = useStore().getState()

  useEffect(() => {
    setModalShow(pokedex.openModal)
  }, [dispatch, pokedex])

  useEffect(() => {
    if (store.pokedex?.error && store.pokedex?.msgError) {
      setImageBallon(tooltipError)
      setWalking(false)
    }
  }, [store])

  function animateTooltipOver() {
    setImageBallon(searchTooltip)
    setOpacityImage(1)
    setTopBallon('-20%')
  }

  function animateTooltipLeave() {
    if (!walking) {
      setOpacityImage(0)
      setTopBallon('6%')
    } else {
      animateTooltipOver()
    }
  }

  const handleClickButton = useCallback(() => {
    setImageBallon(searchingTooltip)
    setWalking(true)

    setTimeout(() => {
      setImageBallon(searchTooltip)
    }, 2000)

    const id = getRandomNumber(1, 807)
    setIdPokemon(id)

    dispatch(requestPokemon(id))
  }, [dispatch])

  function initialStateAnimation() {
    setOpacityImage(0)
    setTopBallon('6%')
    setWalking(false)
    setImageBallon(searchTooltip)
  }

  function closeModal() {
    initialStateAnimation()
    dispatch(openCloseModal())
    dispatch(removePokemon(idPokemon))
  }

  function capturePokemon() {
    initialStateAnimation()
    dispatch(addPokemon(store.pokedex?.pokemon[0]))
    dispatch(openCloseModal())
  }

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Button
        onClick={handleClickButton}
        onMouseOver={animateTooltipOver}
        onMouseLeave={animateTooltipLeave}
      >
        <S.Ballon
          src={imageBallon}
          topBallon={topBallon}
          opacityImage={opacityImage}
        />
        {!walking ? (
          <S.AshFront src={ashFront} alt="Ash da cidade de pallet" />
        ) : (
          <S.AshWalking src={ashWalking} alt="Ash andando" />
        )}
      </S.Button>
      {modalShow && (
        <ModalComponent
          dataPokemon={pokedex.pokemon}
          show={modalShow}
          closeModal={closeModal}
          onClickCapturePokemon={capturePokemon}
        />
      )}
    </S.MapWrapper>
  )
}

export default MapPage
