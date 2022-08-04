import {createContext, useState} from 'react'
import { toast} from 'react-toastify';
export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item]);
        toast.success('Produto Adicionado!')
      };
      
      const removeFromCart = (item) => {
        const newCart = cart.filter(
          (itemOnCart) => itemOnCart.name !== item.name
          );
          setCart(newCart);
          toast.error('Produto Removido!')
      };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

}