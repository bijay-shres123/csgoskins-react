import React from 'react'
import IndexHome from '../Components/Home/IndexHome.js'
import Navbar from '../Components/Navbar'
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Navbar/>
      <IndexHome/>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  height:auto;
`
