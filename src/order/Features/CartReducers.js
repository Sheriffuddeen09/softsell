
export const totalItem = (cart) =>{
    return cart.reduce((sum, order) => sum + order.quantity, 0)
}
export const totalPrice = (cart) =>{
    return cart.reduce((total, order) => total + order.quantity * order.price, 0)
}
const CartReducers = (state, action) =>{

    switch(action.type){
        case "Add":
            return[...state, action.order]
     
        case "Remove": 
        return state.filter(p => p.id !== action.id)
    
        case "Increase":
            const IndexI = state.findIndex(p => p.id === action.id)
            state[IndexI].quantity += 1
            return [...state]
    
        case "Decrease":
            const IndexD = state.findIndex(p => p.id === action.id)
            state[IndexD].quantity -= 1
            return [...state]
        
            
            default:{
                return state;
                }
        }
    

}
export default CartReducers