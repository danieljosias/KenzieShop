import React from 'react';
import { Container } from './styled';
import { motion } from "framer-motion"
import { useContext } from "react";
import { CartContext } from '../../contexts/cart';
import {ProductContext} from '../../contexts/products'

function ProductsList() {
  const {addToCart} = useContext(CartContext)
  const {products} = useContext(ProductContext)
  
  return(
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 3}}>
      <Container>
          {products.map(product=>{
            return <div key={product.id} className='card'>
              <img src={product.img} alt="" />

              <div className='info'>
                <p>{product.name}</p>
                <p>R$ {product.price}</p>
              </div>

              <button onClick={()=>addToCart(product)}>Adicionar o produto</button>
            </div>
          })}
      </Container>
    </motion.div>
  )
}

export default ProductsList;