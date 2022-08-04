import {createContext, useState} from 'react'

export const ProductContext = createContext()

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState([
        {id: 1, name: 'Gabinete Rise Mode Glass', price: 309.9, img: 'https://images.kabum.com.br/produtos/fotos/155311/gabinete-rise-mode-glass-06-frente-e-lateral-em-vidro-preto-rm-ca-06-fb_1655915595_gg.jpg'},
        {id: 2, name: 'Gabinete Husky Frost', price: 479.9, img: 'https://images.kabum.com.br/produtos/fotos/114987/gabinete-gamer-husky-frost-mid-tower-argb-com-fan-porta-em-vidro-temperado-ga-hfr-140_1609355694_gg.jpg'},
        {id: 3, name: 'Gabinete BluecaseBG-024', price: 349.9, img: 'https://images.kabum.com.br/produtos/fotos/79871/79871_index_gg.jpg'},
    ])

  
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )

}