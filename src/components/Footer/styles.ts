import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 1680px;
  margin: 0 auto;
  padding: 5.8rem 8rem;
  background: var(--white-500);

  display: flex;
  align-items: center;
  justify-content: space-between;

  span,
  button {
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--black-400);
  }

  button {
    background: transparent;
    border: none;
  }
`

export const NavigationContainer = styled.nav`
  display: flex;

  button {
    text-align: center;
    & + button {
      margin-left: 5.8rem;
    }
    span {
      display: block;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  .divider {
    height: 0.15rem;
    width: 3rem;
    background: var(--black-400);
    margin: 0 0.5rem;
  }
`
