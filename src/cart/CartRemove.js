import { Api } from "../api/axios";

function CartRemove({ setCart, cartItem }) {
    const handleRemove = async (cartId) => {
        const userId = localStorage.getItem("user_id");

        console.log("Removing cart item:", { cart_id: cartId, user_id: userId }); // Debugging

        try {
            const response = await Api.delete(`/removecart.php`, {
                data: { cart_id: cartId, user_id: userId },
                headers: { "Content-Type": "application/json" },
                withCredentials: true, 
            });

            console.log("Server Response:", response.data); // Debugging

            if (response.data.success) {
                setCart(prevCart => prevCart.filter(item => item.id !== cartId)); // Ensure 'id' matches your DB
            } else {
                console.error("Delete failed:", response.data.error);
            }
        } catch (err) {
            console.log("Error removing item:", err);
        }
    };

    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-full"
                onClick={() => cartItem && handleRemove(cartItem.cart_id)} // Ensure this matches DB
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
            </svg>
        </div>
    );
}

export default CartRemove;
