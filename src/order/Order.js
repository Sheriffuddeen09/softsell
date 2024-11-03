import Product from "./component/Product"

const Order = ({orders}) =>{

    
    return(
    <div className='sidebar *'>
    <div className="usersidebar" >
         <div className='ordercolumn'>
        <div className='orderflex'> 
            <p className='shop'> Shopping from SheriffDev</p>
        </div>
            <div className='order'>
            {
                orders.map((order) =>{
                   return <Product order={order} key={order.id} />
                })
            }
            </div>
        </div>
</div>
</div>)
}
export default Order