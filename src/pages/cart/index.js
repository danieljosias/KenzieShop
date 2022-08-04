import React from 'react';
import Header from '../../components/Header/index';
import ProductsListAddeds from '../../components/ProductsListAddeds';
import { Container } from './styled';

function cart() {
  return(
    <Container>
        <Header/>
        <ProductsListAddeds/>
    </Container>
  )
}

export default cart;