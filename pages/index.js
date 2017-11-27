import React from 'react'
import { hydrate } from 'emotion'
import styled from 'react-emotion'

import Logo from '../components/logo'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

export default () => {
  return (
    <main>
      <Header>
        <Logo size="250" fill="#e4e4e4"/>
        <Postcast> Postcast </Postcast>
      </Header>
    </main>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`
const Postcast = styled.div`
  font-family: 'Unica One';
  font-size: 82px;
  color: #e4e4e4;
`