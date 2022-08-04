import React from 'react';
import { Container } from './styled';
import Header from '../../components/Header/index';
import ProductsList from '../../components/ProductsList/index';

function Showcase() {
  return(
    <Container>
        <Header/>
        <ProductsList/>
    </Container>
  )
}

export default Showcase;