import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../component/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducers'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'

const Cart = () => {
    const {cart} = useContext(CartContext)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)


    return (
        <div className='cartbackground'>
             <div> <button style={{position:'relative', right:'350px', top:'-50px'}} className="gobuttonform" onClick={goBack}>Go Back</button> </div>
        <div>
            {
                cart.map(order =>(
                    <CartProduct order={order} />
                ))
            }
        </div>

        </div>
    )
}
export default Cart