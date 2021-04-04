import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Sidebar from 'components/Sidebar'

import * as S from './styled'
import ashFront from 'assets/images/ashFront.png'
import ashWalking from 'assets/images/ashWalking.gif'
import searchTooltip from 'assets/images/searchTooltip.png'
import searchingTooltip from 'assets/images/searchingTooltip.png'
import { requestPokemon } from 'config/ducks/pokemon'

const MapPage = () => {
  const [imageBallon, setImageBallon] = useState('')
  const [topBallon, setTopBallon] = useState('6%')
  const [opacityImage, setOpacityImage] = useState(0)
  const [walking, setWalking] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setImageBallon(searchTooltip)
  }, [])

  function animateTooltipOver() {
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

  function handleClickButton() {
    setImageBallon(searchingTooltip)
    setWalking(true)

    const id = Math.floor(Math.random() * (807 - 1 + 1)) + 1

    dispatch(requestPokemon(id))
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
    </S.MapWrapper>
  )
}

export default MapPage
