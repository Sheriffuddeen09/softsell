import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Api } from "../api/axios";
import trackone from './image/Frame 184.png'
import tracktwo from './image/Frame 185.png'
import trackthree from './image/Frame 186.png'
import Order from "./Order";

const OrderTracking = () => {
  const { order_id } = useParams(); // Get order_id from URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await Api.get(`/tracking.php?order_id=${order_id}`);
        const data = response.data;
        if (data.success) {
          setOrder(data.order); // Store order details
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [order_id]);

  if (loading) return <p className="text-center mt-6">Loading order details...</p>;
  if (!order) return <p className="text-center mt-6">Order not found.</p>;

  const content = (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Order Tracking Progress Bar */}
      <div className="flex justify-between items-center mb-6">
        <img src={trackone} alt="trackicon" className="w-16 h-16" />
        <img src={tracktwo} alt="trackicon" className="w-16 h-16" />
        <img src={trackthree} alt="trackicon" className="w-16 h-16"/>
      </div>
      <div className="flex justify-center items-center mb-6 sm:block hidden">
      <div className="flex justify-center items-center mb-6">
          <div className="bg-pink-600 text-2xl border flex items-center border-pink-700 w-4 h-4 rounded-full "></div>
        <div className="w-96 h-1 bg-[#23BCA8]"></div>
        <div className="bg-pink-600 text-2xl border flex items-center border-pink-700 w-4 h-4 rounded-full "></div>
        <div className="w-96 h-1 bg-[#23BCA8]"></div>
        <div className="bg-pink-600 text-2xl border flex items-center border-pink-700 w-4 h-4 rounded-full "></div>
      </div>
      </div>
      <div className="flex justify-between items-center mb-6">
      <p className="sm:text-lg text-sm  font-bold">Order Placed</p>
      <p className="sm:text-lg text-sm font-bold">On the way</p>
      <p className="sm:text-lg text-sm font-bold">Product Delivery</p>
      </div>
      {/* Order Details */}
      <div className="border rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold">Order ID: {order.tracking_number}</h2>
        <p className="text-gray-600">Order Date: {order.order_date}</p>

        <div className="mt-4 flex justify-between">
        <Link to={`/invoice/${order.id}`}>
          <button className="border px-4 py-2 text-gray-700 rounded-md">Invoice</button>
        </Link>
          <Link to={`/order/${order.id}`}>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md">Track Order</button>
          </Link>
        </div>

        <hr className="my-6" />

        {/* Order Items */}
        {order.items && order.items.length > 0 ? (
          order.items.map((item, idx) => (
            <div key={idx} className="flex items-start border-b pb-4 mb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">Size:</span> {item.size}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Color:</span> {item.color}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">${item.price}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found for this order.</p>
        )}

        {/* Order Summary & Need Help Section */}
        <div className="flex justify-between mt-6 border-t pt-6">
          {/* Need Help */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Need Help</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-black"><span className="mr-2 border border-2 rounded border-pink-700">📦</span> Order Issues</li>
              <li className="flex items-center text-black"><span className="mr-2 border-2 rounded  border-pink-700">🚚</span> Delivery Info</li>
              <li className="flex items-center text-black"><span className="mr-2 border-2 rounded  border-pink-700">↩️</span> Returns</li>
            </ul>
          </div>

          {/* Order Summary */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p className="text-gray-600">Subtotal: <span className="font-bold">${order.subtotal}</span></p>
            <p className="text-gray-600">Discount: <span className="font-bold">${order.discount}</span></p>
            <p className="text-gray-600">Delivery: <span className="font-bold">${order.delivery}</span></p>
            <p className="text-gray-600">Tax: <span className="font-bold">${order.tax}</span></p>
            <p className="text-xl font-bold mt-2">Total: ${order.total}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {content}
      <Order />
    </div>
  )
};

export default OrderTracking;
