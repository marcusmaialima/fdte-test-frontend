import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BackgroundColorFull = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(12, 255, 174) 0%,
    rgb(18, 255, 225) 100%
  );
  border-radius: 1rem;
  overflow: auto;
  scrollbar-width: none;
  @media (max-width: 500px) {
    overflow: hidden;
  }
`

export const ModalFull = styled.section`
  width: 100%;
  max-height: 620px;

  @media (max-width: 500px) {
    max-height: auto;
  }
`

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1rem;

  @media (max-width: 500px) {
    border-radius: 0px;
  }
`

export const ButtonClose = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #8f9bb3;
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Icon = styled.img``

export const DetailPokemon = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 170px;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  position: relative;

  @media (max-width: 500px) {
    border-radius: 0px;
    height: 100vh;
  }
`
export const BadgePokemonTop = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: #fff;
  border-width: 4px;
  border-style: solid;
  border-color: #00d68f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(50% - 115px);
  top: -140px;
`

export const PokemonSprite = styled.img`
  width: 150px;
`

export const ContainerStatus = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 130px;
  padding-bottom: 120px;
`

export const NamePokemon = styled.h3`
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

export const WrapperRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
`

export const BoxStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #c5cee0;
  padding-right: 4rem;
  padding-left: 4rem;

  &:nth-child(2) {
  }
  &:last-of-type {
    border-right: none;
  }
`

export const Title = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
`

export const TitleMid = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 20px;
`

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`

export const RowLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Line = styled.div`
  height: 1px;
  background-color: #c5cee0;
  width: 100%;
`

export const RowTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`

export const FlagType = styled.span`
  display: inline-flex;
  color: #fff;
  background-color: ${(props) => props.bgColor};
  padding: 0.8rem 2.5rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-radius: 2.5rem;

  &:nth-child(1) {
    margin-right: 1.5rem;
  }
`

export const Abilities = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const Pokebola = styled.img`
  width: 130px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 65px);
  cursor: pointer;
`
