import { Link } from "react-router-dom"

const Product = ({order}) =>{

    return(
        <div>
            <div className=""> 
             <img src={order.url} alt='order' width={180} height={260}/>
             <div className="">
                <Link to={`/order/${order.id}`}>Add To Favorite</Link>
            </div>
            </div>
        </div>
    )
}
export default Product