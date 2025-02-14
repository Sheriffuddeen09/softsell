import { useEffect, useState } from "react";
import { Api } from "../api/axios";
import defau from './image/default.png'

const productUrl = "http://localhost/source_code/image/";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const userId = localStorage.getItem("user_id");
      try {
        const response = await Api.get(`/notification.php?user_id=${userId}`);
        if (response.data.success) {
          setNotifications(response.data.notifications);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-center text-gray-500">No new notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notif, index) => (
            <div
              key={index}
              className={`flex flex-wrap items-center gap-4 p-4 border rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 ${
                notif.status === "unread" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              {/* Notification Image */}
              {notif.image && (
               <img
               src={notif.image ? `${productUrl}${notif.image}` : defau} 
               alt="Notification"
               className="w-16 h-16 object-cover rounded-lg shadow-md"
               onError={(e) => {
                 e.target.onerror = null; // Prevent infinite loop
                 e.target.src = defau; // Set default image if the original fails to load
               }}
             />
             )}

              {/* Notification Details */}
              <div className="flex-1">
              <p 
                dangerouslySetInnerHTML={{ __html: notif.message }} 
                className=" text-sm">
                </p>
                {notif.price && (
                  <p className="text-green-600 font-bold">Price: ${notif.price}</p>
                )}
                <p className="text-sm text-gray-500">
                  {new Date(notif.created_at).toLocaleString()}
                </p>
              </div>

              {/* Status Indicator */}
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  notif.status === "unread"
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {notif.status === "unread" ? "Unread" : "Read"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
