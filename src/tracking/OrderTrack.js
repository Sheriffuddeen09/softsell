import { useEffect, useState } from "react";
import { Api } from "../api/axios";

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await Api.get(`/tracking.php`); // Fetch all orders
        const data = response.data;
        if (data.success) {
          setOrders(data.orders); // Assume `data.orders` is an array of orders
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading order details...</p>;
  if (orders.length === 0) return <p className="text-center mt-6">No orders found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

      {orders.map((order, index) => (
        <div key={index} className="border-b pb-6 mb-6">
          <div className="mb-4">
            <p className="text-lg font-semibold">Tracking Number: {order.tracking_number}</p>
            <p className="text-md text-gray-600">Payment Method: {order.payment_method}</p>
            <p className="text-md text-gray-600">Total Price: ${order.total_price}</p>
            <p className="text-md text-gray-600">Status: <span className="font-semibold text-blue-600">{order.status}</span></p>
          </div>

          <h3 className="text-xl font-semibold mb-3">Delivery Address</h3>
          <p className="text-gray-700">{order.address}, {order.city}, {order.state}, {order.zip_code}, {order.country}</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Order Items</h3>
          <div className="space-y-4">
            {order.items.map((item, idx) => ( // Loop through order items
              <div key={idx} className="flex items-center border-b pb-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-gray-600">Size: {item.size} | Color: {item.color}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-lg font-semibold">Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;
