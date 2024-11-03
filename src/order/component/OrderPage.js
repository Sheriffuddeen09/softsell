import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { orderlists } from './PostOrder';
import { CartContext } from "../Features/ContextProvider";
const OrderPage = () =>{

    const {id} = useParams()
    const order = orderlists.find(order => (order.id).toString() === id)


    const {dispatch} = useContext(CartContext)

    return(
        <div className='postbodyme allpostblog' style={{width: '100%', overflow:'hidden', marginTop:'2px'}}>
            <section className="sideorder">
        {order &&
          
        <div>
            <div className=''>
                 <img src={order.url} alt='phone' height={300} width={300} />           
            </div>
            <button className={``} onClick={() => dispatch({type:"Add", order:order})}> Add To Cart</button>
        
        </div>
            }
        </section>
        </div>
        
    )
}
export default OrderPage