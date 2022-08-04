import React from 'react';
import { Container } from './styled';
import {BsFillCartCheckFill} from 'react-icons/bs'
import {FaSignInAlt} from 'react-icons/fa'
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

    return(
        <Container>
          <header>
            <h2>Kenzie Shop</h2>

            <div className='buttons__container'>
                <button className='cart' onClick={()=>history.push('/')}>Home</button>
                <button className='cart' type='submit' onClick={()=> history.push('/cart')}><BsFillCartCheckFill className='icon'/>Carrinho</button>
                <button className='signin'><FaSignInAlt className='icon'/>Entrar</button>
            </div>
          </header>
        </Container>
      )
}

export default Header;