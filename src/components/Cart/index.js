import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { Container } from './styled';

function Cart() {

  const {cart }= useContext(CartContext)
  console.log(cart);

  const total = cart.reduce((acc, item)=>{
    return acc + item.price
  },0)
  console.log(total);
  const result = total.toFixed(2)

  return(
    <Container>
      <div className='cart'>
        <h2>Resumo do pedido</h2>

        <div>
          <p>Quantidade: {cart.length}</p>
          <p>R$ {result}</p>
        </div>

        <button>Finalizar o pedido</button>
      </div>
    </Container>
  )
}

export default Cart;