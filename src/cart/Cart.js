import { useEffect, useState } from "react";
import { Api } from "../api/axios";
import paypal from './images/paypal.png'
import googlepay from './images/googlepay.png'
import visa from './images/visa.png'
import CartRemove from "./CartRemove";
const productUrl = "http://localhost/source_code/image/";
//const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");


const locations = [
  "Houston", "San Francisco", "Seattle", "Florida", "Illinois",
  "New York", "Los Angeles", "Chicago", "Miami", "Dallas"
];

const categories = [
  { title: "Dogs" },
  { title: "Cats" },
  { title: "Pet Clothing"},
  { title: "Pet Carriers" },
  { title: "Dog & Cat Beds"}
];


function Cart({cart, setCart}) {
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");


  const fetchCart = async () => {
    const userId = localStorage.getItem("user_id");
    try {
      setLoading(true);
      const response = await Api.get(`/cart.php?user_id=${userId}`);
      if (response.data.success) {
        setCart(response.data.cart);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);



  // const handleStripePayment = async () => {
  //     const stripe = await stripePromise;
  //     const { error } = await stripe.redirectToCheckout({
  //         lineItems: [{ price: "price_id", quantity: 1 }],
  //         mode: "payment",
  //         successUrl: "http://localhost:3000/order-history",
  //         cancelUrl: "http://localhost:3000/cart",
  //     });

  //     if (error) {
  //         console.error("Stripe Error:", error);
  //     }
  // };

  // const handlePayPalPayment = (details, data) => {
  //     console.log("PayPal Payment Successful:", details);
  //     alert("Transaction completed by " + details.payer.name.given_name);
  // };


  // Category Checkbox Handler
  const [show, setShow] = useState(false);

const toggleCategory = (categoryTitle) => {
  setSelectedCategories((prevSelected) =>
    prevSelected.includes(categoryTitle)
      ? prevSelected.filter((c) => c !== categoryTitle)
      : [...prevSelected, categoryTitle]
  );
};

const filteredCategory =
  selectedCategories.length > 0
    ? categories.filter((category) => selectedCategories.includes(category.title))
    : categories;

const visibleCategories = show ? filteredCategory : filteredCategory.slice(0, 3);



  // Rental Duration Checkbox Handler
  const toggleDuration = (duration) => {
    setSelectedDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration]
    );
  };

  const filteredCart = cart.filter((item) => {
    const itemCategory = item.category?.trim().toLowerCase() || ""; // Prevent undefined errors
    return (
      (selectedCategories.length
        ? selectedCategories.some((selected) => selected.toLowerCase() === itemCategory)
        : true) &&
      (selectedLocations.length
        ? selectedLocations.includes(item.location)
        : true)
    );
  });


  

  const [showAll, setShowAll] = useState(false);

 
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const displayedLocations = showAll ? filteredLocations : filteredLocations.slice(0, 3);

  const toggleLocation = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  
  const totalPrice = filteredCart.reduce((acc, item) => acc + Number(item.price), 0);
  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : "0.00";

  const content = (
    <div className="flex flex-col sm:flex-row gap-5 mx-10">
      <div className="border border-pink-700 p-4 w-full sm:w-96 mb-10" style={{height:'750px'}}>
        <h2 className="text-pink-700 font-bold text-lg">Rental Duration</h2>
        {["Per Hour", "Per Day"].map((duration) => (
          <label key={duration} className="block">
            <input
              type="checkbox"
              checked={selectedDurations.includes(duration)}
              onChange={() => toggleDuration(duration)}
            />
            {duration}
          </label>
        ))}
         <h2 className="text-pink-700 font-bold text-lg mt-4">Category</h2>
    {visibleCategories.map(({ title, icon }) => (
      <label key={title} className="block flex items-center gap-2">
        <input
          type="checkbox"
          checked={selectedCategories.includes(title)}
          onChange={() => toggleCategory(title)}
        />
        {title}
      </label>
    ))}
    
    {filteredCategory.length > 3 && (
      <button className="text-pink-700 mt-2" onClick={() => setShow(!show)}>
        {show ? "View Less" : "View All"}
      </button>
    )}
    <div>
      <div className="w-full bg-pink-700 h-0.5 mt-1 -mb-3 block"></div>
      <h2 className="text-pink-700 font-bold text-lg mt-4">Location</h2>
      <input
        type="text"
        placeholder="Search location..."
        className="border p-2 w-full mb-2"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      {displayedLocations.map((location) => (
        <label key={location} className="block">
          <input
            type="checkbox"
            checked={selectedLocations.includes(location)}
            onChange={() => toggleLocation(location)}
          />
          {location}
        </label>
      ))}
      {filteredLocations.length > 3 && (
        <button
          className="text-pink-700 mt-2"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View All"}
        </button>
      )}
      </div>
    <div className="w-full bg-pink-700 h-0.5 mt-1 -mb-3 block"></div>

        <h2 className="text-pink-700 font-bold text-lg mt-4">Cart Totals</h2>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${formattedTotalPrice}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${formattedTotalPrice}</span>
        </div>
       
        <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-pink-700 font-bold text-lg mt-4">Payment Method</h2>

            <div className="flex justify-center gap-4">
                <img
                    src={paypal}
                    alt="PayPal"
                    className={`w-20 h-12 cursor-pointer`}
                />
                <img
                    src={googlepay}
                    alt="Google Pay"
                    className={`w-16 h-12 cursor-pointer `}
                />
                <img
                    src={visa}
                    alt="Visa"
                    className={`w-20 h-12 cursor-pointer`}
                />
            </div>

           
        </div>

        <button className="bg-pink-700 text-white w-full mt-4 p-2 rounded">
          Proceed to Checkout
        </button>
      </div>

      {/* Cart Items */}
      <div className="w-full sm:w-2/3 mb-10">
        {loading ? (
          <p>Loading Cart...</p>
        ) : filteredCart.length > 0 ? (
          filteredCart.map((car) =>(
            <div key={cart.id} className="flex gap-5 border border-pink-700 p-1 sm:p-5 flex-row  flex-wrap">
              <div className="flex flex-col">
              <img
                src={`${productUrl}${car.image}`} 
                alt={car.title}
                className="w-56 h-52 "
                // onClick={() => window.location.href = `/product/${product.id}`} // Redirect to details page
              />
              <div className="inline-flex gap-6 flex-wrap hidden">
                    <div >
                    <p className="text-center font-bold">Pick up Date & Time</p>
                    <div className="border w-36 border-2 rounded-lg p-2 mx-auto border-pink-700 text-center">
                     <p>{car.pick_up_date}</p>
                     <p>{car.pick_up_time}</p>
                     
                    </div>
                    </div>
                    <div>
                    <p className="text-center font-bold">Drop off Date & Time</p>
                    <div className="border w-36 border-2 rounded-lg p-2 mx-auto border-pink-700 text-center">
                     <p>{car.pick_up_date}</p>
                     <p>{car.pick_up_time}</p>
                    
                    </div>
                    </div>
                    </div>
             
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                <p className="text-sm font-bold bg-[#7fffd4] sm:w-56 text-center  p-1 rounded">{car.title}</p>
              <CartRemove cartItem={car} setCart={setCart} />
              </div>
                <div className="inline-flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

                <p className='sm:w-52 w-48 my-2' style={{fontSize:"13px"}}>{car.location}</p>
                </div>
                <div className="inline-flex flex-wrap gap-5 sm:gap-0 ">
                <p className="text-sm h-8 font-bold bg-[#7fffd4]  text-center  p-1 rounded 
                w-20">${car.price}</p>
            <p className="width-des md:translate-x-0 lg:translate-x-28">{car.maintenance}</p>
            </div>
            </div>
            </div>
                ))
              ) : (
                  <p>No Cart to display</p>
              )
                }
      </div>
    </div>
  );

  return (

    <div>
      <h1 className="bg-pink-300 text-pink-700 p-4 w-72 sm:w-11/12 mx-auto text-2xl mb-4 shadow-md font-bold">  Pet Rental </h1>
      {content}
    </div>
  )
}

export default Cart;