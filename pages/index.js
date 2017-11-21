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
        <Postcast> Postcast </Postcast>
        <Logo height="200" width="200" fill="#444"/>
      </Header>
    </main>  
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #fafafa;
`
const Postcast = styled.div`
  font-family: Damion;
  font-size: 32px;
  align-self: flex-start;
`

