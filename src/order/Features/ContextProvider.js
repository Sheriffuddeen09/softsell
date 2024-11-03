import CartReducers from './CartReducers'
import { createContext } from 'react'
import { useReducer } from 'react'

export const CartContext = createContext()
const ContextProvider = ({children}) =>{

    const [cart, dispatch ] = useReducer(CartReducers, [])
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider