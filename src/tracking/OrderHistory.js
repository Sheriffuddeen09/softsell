import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/axios"; // Import your Axios instance

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await Api.get("/orderHistory.php"); // Fetch orders from backend
        const data = response.data;
        if (data.success) {
          setOrders(data.orders); // Store orders in state
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading order history...</p>;
  if (orders.length === 0) return <p className="text-center mt-6">No orders found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="border-b pb-4">
          <p className="font-semibold">Order ID: {order.id}</p>
          <p className="text-gray-600">Status: {order.status}</p>
          <Link to={`/order/${order.id}`} className="text-blue-600 font-semibold">
            Track Order
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
