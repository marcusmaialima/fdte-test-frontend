import styled from 'styled-components'

import img from 'assets/images/pageBackground.png'

export const MapWrapper = styled.div`
  position: relative;
  background: url(${img}) center;
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`

export const AshFront = styled.img`
  width: 80px;
`

export const AshWalking = styled.img`
  width: 72px;
  margin-left: 2px;
`

export const Ballon = styled.img`
  opacity: ${(props) => props.opacityImage && props.opacityImage};
  transition: opacity ease-in-out 0.5s;
  transition: top ease-in-out 0.5s;
  border: none;
  width: 72px;
  height: 62px;
  position: absolute;
  top: ${(props) => props.topBallon && props.topBallon};
  left: 6%;
`

export const Button = styled.button`
  position: absolute;
  left: 50%;
  top: calc(50% - 71px);
  background-color: transparent;
  border: none;
  width: 72px;
  height: 142px;

  :hover {
  }
`
