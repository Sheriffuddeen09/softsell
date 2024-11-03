import Order from "./Order"
const OrderElement = ({orders, setOrders}) =>{

    return (
        <div className="columnorders">
            <div>
            <Order orders={orders} setOrders={setOrders}/>
            </div>
            <div>
            
            </div>
        </div>
    )
}
export default OrderElement