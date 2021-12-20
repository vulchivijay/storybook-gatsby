import styled, { css } from 'styled-components'

export const SectionBucket = styled.div`
  padding: 50px 0;

  ${props => props.large && css`
    padding-top: 150px;
  `}
`

export const Ptag = styled.p`
  margin: 0;

  ${props => props.p1 && css`
    padding: 1rem;
  `}
`