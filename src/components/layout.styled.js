import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: auto;

  ${props => props.large && css`
    max-width: 1220px;
  `}
  
  ${props => props.medium && css`
    max-width: 1110px;
  `}

  ${props => props.small && css`
    max-width: 980px;
  `}
`

export const Flex = styled.div`
  display: flex;

  ${props => props.spacebetween && css`
    justify-content: space-between;
  `}

  ${props => props.aligncenter && css`
    align-items: center;
  `}

  ${props => props.textcenter && css`
    justify-content: center;
  `}
`

export const FlexItems = styled.div`
  flex: 1 1 50%;
  
  ${props => props.basis6 && css`
    flex-basis: 60%;
  `}
`