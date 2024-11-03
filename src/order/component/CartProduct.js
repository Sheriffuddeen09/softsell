
const CartProduct = ({order}) =>{
   
    return (

        <div className='cartFlex'>
            
            <img src={order.url}  alt='order' width={200} height={200} className='imagecart'/>
            <div className='cartInline'>
            <button>Favorite Added</button>
           </div>
        </div>
    )
}
export default CartProduct