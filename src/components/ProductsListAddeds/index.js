import React, { useContext } from "react";
import { Container } from "./styled";
import Cart from "../Cart/index";
import { motion } from "framer-motion";
import { CartContext } from "../../contexts/cart";

function ProductsListAddeds() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <Container>
      <div className="wrapper">
        <div className="productsListAddeds__container">
          <div className="productsListAddeds__header">
            <p>Produtos</p>
            <p>Preços</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <div className="productsListAddeds">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="card">
                    <img src={product.img} alt="" />
                    <p>{product.name}</p>
                    <p>R$ {product.price}</p>
                    <button onClick={() => removeFromCart(product)}>
                      Remover
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <Cart />
      </div>
    </Container>
  );
}

export default ProductsListAddeds;
