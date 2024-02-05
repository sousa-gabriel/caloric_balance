import styled from 'styled-components/native'

interface IImageLogo {
  bottom: number
}

export const Header = styled.View`
  justify-content: center;
  align-items: flex-start;
  height: 100px;
`

export const ContainerIcon = styled.View`
  position: absolute;
  top: 0px;
`
export const ImageLogo = styled.Image<IImageLogo>`
  position: absolute;
  right: ${({ theme }) => theme.spaces.sp16}px;
  bottom: ${({ bottom }) => bottom + 24}px;
  width: 100px;
  height: 100px;
  resize-mode: contain;
`
