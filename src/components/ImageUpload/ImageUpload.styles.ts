import styled from 'styled-components'
import { Wrapper as Button } from '../Button/Button.styles'

export const Wrapper = styled.div`
  
`

export const ImagePreview = styled.div<{ preview: string }>`
  height: 100%;

  background-image: url(${p => p.preview});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonWrapper = styled.button`
  width: 203px;
  height: 56px;

  padding-left: 16px;
  border: 1px solid #274060;
  
  font-size: 18px;

  color: #274060;
  background-color: #FFFFFF;

  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
  }
`
export const ButtonLabel = styled.label`
  background-color: #FFFFFF;
  color: #274060;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 10px;
`

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  ${ButtonWrapper} {
    display: none;
  }

  &:hover {
    ${ImagePreview} {
      opacity: 0.7;
    }

    ${ButtonWrapper} {
      display: block;
    }
  }
`

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  background-color: #09f;
  color: #fff;

  padding: 24px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;
`