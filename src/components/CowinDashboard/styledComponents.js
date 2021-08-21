// Style your elements here
import styled from 'styled-components'

export const CowinDashboardContainer = styled.div`
  padding: 50px;
  margin: 0;
  background-color: #161625;
  height: 280vh;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`

export const LogoImgTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LogoText = styled.p`
  color: #2cc6c6;
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`

export const CowinDashBoardHeading = styled.h1`
  color: #ffffff;
`

export const ChartsContainer = styled.div`
  margin: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40%;
`

export const ImageFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageFailureView = styled.img`
  width: 40%;
  height: 40%;
`

export const FailureText = styled.h1`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
`
