import React from 'react'
import SearchBar from './SearchBar'
import Theme from './Theme'
import { NavBar, Title, Wrapper } from './styled'

const Navigate = () => {
  return (
    <NavBar>
        <Wrapper>
    <Title>News App</Title>
    <SearchBar/>
    <Theme/>
    </Wrapper>
    </NavBar>
  )
}

export default Navigate