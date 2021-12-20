import styled, { css } from 'styled-components'

export const Button = styled.button`
  margin: 0.5rem 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  color: #FFF;
  border: 1px solid #03a973 !important;
  background: #03a973 !important;

  ${props => props.primary && css`
    background: #183e46;
    color: white;
  `}

  ${props => props.big && css`
    padding: 1rem 2rem;
    font-size: 1.4rem;
  `}
`;