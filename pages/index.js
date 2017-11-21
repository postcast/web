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
        <Logo height="100" width="100" fill="#444"/>        
        <Postcast> Postcast </Postcast>        
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
  padding: 40px;
`
const Postcast = styled.div`
  font-family: Damion;
  font-size: 92px;
  color: #444;
`