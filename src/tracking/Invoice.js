import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Api } from "../api/axios";

const Invoice = () => {
  const { order_id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await Api.get(`/invoice.php?order_id=${order_id}`);
        if (response.data.success) {
          setOrder(response.data);
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [order_id]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Invoice-${order_id}`,
  });

  if (loading) return <p className="text-center mt-6">Loading invoice...</p>;
  if (!order) return <p className="text-center mt-6">Invoice not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div ref={componentRef} className="p-6 border rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-4">Invoice</h2>
        <p className="text-gray-600">Order ID: <b>{order.order.tracking_number}</b></p>
        <p className="text-gray-600">Date: {order.order.order_date}</p>

        <hr className="my-4" />

        {/* Customer & Payment Details */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Customer Details</h3>
            <p>{order.order.customer_name}</p>
            <p>{order.order.email}</p>
            <p>{order.order.address}, {order.order.city}, {order.order.state}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Payment</h3>
            <p>{order.order.payment_method}</p>
            <p className="font-bold">Total: ${order.order.total_price}</p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Items Table */}
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Item</th>
              <th className="p-2 border">Size</th>
              <th className="p-2 border">Color</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.size}</td>
                <td className="p-2 border">{item.color}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="text-right mt-4">
          <p className="text-lg font-bold">Grand Total: ${order.order.total_price}</p>
        </div>
      </div>

      {/* Print Invoice Button */}
      <button 
        onClick={handlePrint} 
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Print Invoice
      </button>
    </div>
  );
};

export default Invoice;
