import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import { Link, useParams } from "react-router-dom";

import colorone from './image/Rectangle 81.png'
import colortwo from './image/Rectangle 82.png'
import colorthird from './image/Rectangle 83.png'
import colorfour from './image/Rectangle 84.png'
import ReviewsPage from "./Reviews";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Import icons

const productUrl = 'http://localhost/source_code/image/'

function ShopPageId (){

  const {id} = useParams()

    const [product, setProduct] = useState(null);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState("S");
    const [quantity, setQuantity] = useState(1);
    const [pickupDate, setPickupDate] = useState("");
    const [dropoffDate, setDropoffDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [dropoffTime, setDropoffTime] = useState("");
    const [changeId, setChangeId] = useState(1)
    const [reviews, setReviews] = useState([])
    const [color, setColor] = useState(1)
    const [reviewView, setReviewView] = useState(false)
    const handleColor = (id) =>{

      setColor(id)
    }

    const handleChangeId = (id) =>{

      setChangeId(id)
    }

    const handleReviews = () =>{

    setReviewView(!reviewView)
    
    }
  
    const fetchProduct = async () =>{

      
      setLoading(true)
      setError("")
      setLoading(true)
      try {
        const response = await Api.get(`/productId.php?id=${id}`);
        console.log("API Response:", response.data);

    if (response.data.success && response.data.product) {
      setProduct(response.data.product);
      setReviews(response.data.reviews);
    } else {
      setProduct(null);
      console.error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    setError("Failed to fetch product" );
  } finally {
    setLoading(false);
  }
}
    useEffect(() => {
    fetchProduct()
  }, [id]);


  const totalPrice = product ? quantity * parseFloat(product.price) + parseFloat(product.security_amount) : 0;

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to store product in localStorage or global state
  };

  const productList = (
    <div className="flex flex-col items-center justify-center w-full">
      {loading && <p className="text-center sm:text-2xl text-sm font-bold "> Loading Product...</p>}
      {error && <p className="text-center sm:text-2xl text-sm font-bold  text-red-500">{error}</p>}
      
      {product && typeof product === "object" ? (
  <div className="relative group">
    <div key={product.id} className="flex flex-row justify-around flex-wrap sm:gap-12 sm:my-5">
      <div className="flex flex-col"> 
      <div>
        <img
        src={`${productUrl}${product.image}`} 
        alt={product.title} 
          className={color === 1 ? "show-content" : "content"}
        />
        <img
        src={`${productUrl}${product.color_image_pink}`} 
        alt={product.title} 
          className={color === 4 ? "show-content" : "content"}
        />
        <img
        src={`${productUrl}${product.color_image_orange}`} 
        alt={product.title} 
          className={color === 2 ? "show-content" : "content"}
        />
        <img
        src={`${productUrl}${product.color_image_red}`} 
        alt={product.title} 
          className={color === 3 ? "show-content" : "content"}
        />
        </div>

        
      <div className="inline-flex sm:flex-nowrap gap-3 sm:my-10 ">
        <img
        src={`${productUrl}${product.image}`} 
        alt={product.title}  className={`w-28 h-28 cursor-pointer hidden sm:block ${color === 1 ? "border-2 border-black" : ""}`}
        onClick={() => handleColor(1)}
        />
        <img
        src={`${productUrl}${product.color_image_orange}`} 
        alt={product.title}  className={`w-28 h-28 cursor-pointer hidden sm:block ${color === 2 ? "border-2 border-black" : ""}`}
        onClick={() => handleColor(2)}
        />
        <img
        src={`${productUrl}${product.color_image_red}`} 
        alt={product.title}  className={`w-28 h-28 cursor-pointer hidden sm:block ${color === 3 ? "border-2 border-black" : ""}`}
        onClick={() => handleColor(3)}
        />
        <img
        src={`${productUrl}${product.color_image_pink}`} 
        alt={product.title} 
        className={`w-28 h-28 cursor-pointer hidden sm:block ${color === 4 ? "border-2 border-black" : ""}`}
        onClick={() => handleColor(4)}
        />
        
        </div>
        </div>
        <div className="flex flex-col justify-center mx-auto">
      <h2 className="text-lg sm:text-2xl font-semibold mt-2 sm:text-start text-center  text-xl capitalize sm:text-center">
        {product.title} 
      </h2>
      <p className="text-black font-bold my-2">
        ${product.price ? parseFloat(product.price).toFixed(2) : "N/A"}
      </p>
     <div className="" >
      <div>
      <p className="text-sm font-bold">Color</p>
      <div className="inline-flex flex-wrap ">
        <img src={colorone} alt="color" className="cursor-pointer" onClick={() => handleColor(1)}/>
        <img src={colortwo} alt="color" className="cursor-pointer" onClick={() => handleColor(2)}/>
        <img src={colorthird} alt="color" className="cursor-pointer" onClick={() => handleColor(3)}/>
        <img src={colorfour} alt="color" className="cursor-pointer" onClick={() => handleColor(4)} />
      </div>
      </div>
      <div className="flex flex-row sm:flex-col sm:items-start items-center justify-around">
      <div className="flex flex-col">
      <label className="font-bold">Size:</label>
      <select onChange={(e) => setSize(e.target.value)} className="border p-2 w-40 border-[#D2016A] rounded my-2">
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra</option>
      </select>
        </div>
        <div className="flex flex-col">
        <p className="text-sm font-bold ">Quantity</p>
        <select 
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))} className="my-2 border p-2 w-28 rounded border-black" >
        {
          [...Array(10).keys()].map(num =>(
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))
        }
        </select>
        </div>
        </div>
      
      <p className="text-sm text-xl my-3 font-medium">Security Amount: <small className="text-sm">${totalPrice.toFixed(2)}</small></p>
     <div className="flex flex-col">
     <div className="flex flex-col">
      <div className="inline-flex gap-3">
        {/* Pickup Date */}
        <div className="flex flex-col relative">
          <label className="font-bold text-sm my-2">Pick up date</label>
          <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="border p-2 sm:w-40 w-32 pl-8 border-pink-700 border rounded-md" />
        </div>
        
        {/* Drop-off Date */}
        <div className="flex flex-col relative">
          <label className="font-bold text-sm my-2">Drop off date</label>
          <input type="date" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} className="border p-2 sm:w-40 w-32 pl-8 rounded-md border-pink-700 border" />
        </div>
      </div>

      <div className="inline-flex gap-3">
        {/* Pickup Time */}
        <div className="flex flex-col relative">
          <label className="font-bold text-sm my-2">Pick up time</label>
          <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="border p-2 sm:w-40 w-32 pl-8 rounded-md border-pink-700 border" />
        </div>
        
        {/* Drop-off Time */}
        <div className="flex flex-col relative">
          <label className="font-bold text-sm my-2">Drop off time</label>
          <input type="time" value={dropoffTime} onChange={(e) => setDropoffTime(e.target.value)} className="border p-2 sm:w-40 w-32 pl-8 rounded-md border-pink-700 border" />
        </div>
      </div>
    </div>
        <div className="inline-flex flex-wrap gap-2 sm:gap-4 my-4 flex-wrap">
          <button className="bg-[#D2016A] p-2 sm:w-40 w-32 rounded-xl text-white text-sm hover:bg-white hover:border-pink-700 border border-pink-700 border hover:text-pink-700">Rent Now</button>
          <Link to={'/inquiry'} className="border-[#D2016A]  hover:bg-pink-700 hover:text-white sm:text-center border border-2 sm:w-40 w-32 rounded-xl text-[#D2016A] bg-white"><button className="sm:text-center flex flex-col items-center justify-center mx-auto text-sm translate-y-1">Inquiry</button></Link>
        </div>
        <h1 className="font-bold id-width my-2">Queenmore Dog Sweater - <span className="text-[#D2016A]">Product Details</span></h1>
        <p className="font-bold id-width sm:text-center my-1">Materials: <small className="font-light text-sm text-black">{product.material}</small></p>
        <p className="font-bold id-width sm:text-center my-1">Features: <small className="font-light text-sm text-black">{product.features}</small></p>
        <p className="font-bold id-width sm:text-center my-1">Stretchable Fit: <small className="font-light text-sm text-black">{product.stretchable}</small></p>
        <p className="font-bold id-width sm:text-center">Stylish Design: <small className="font-light text-sm text-black">{product.stylish_design}</small></p>
        <p className="font-bold id-width sm:text-center">Machine Washable: <small className="font-light text-sm text-black">{product.machine_washable}</small></p>
      </div>

      </div>
    </div>
    </div>
  </div>
) : (
  <p className="text-center sm:text-2xl text-sm font-bold ">Product not found. 🐾</p>
)}


    </div>
  );
  
  const Reviews = (
    <div className="flex flex-col justify-center mx-auto mb-12">
    {
    reviews.length > 0 ? (

    reviews.map((review, index) => (
                    <div key={index} className="border p-4 sm:translate-x-32 translate-x-3 shadow-md my-2 flex justify-center mx-auto w-64 id-wid flex-col">
                        <div className="flex items-center">
                            <img 
                                src={`http://localhost/source_code/${review.profile_image}`}
                                alt="User" 
                                className="w-10 h-10 rounded-full mr-2" 
                            />
                            <p><strong>{review.firstname} {review.lastname}</strong></p>
                        </div>
                        <div>
                        <p className="text-black mt-3 mb-1 font-bold">Rating: {review.rating}⭐</p>
                        <p className="text-sm my-">{review.review_text}</p>
                    </div>
                    </div>
                ))
            ) : (
                <p className="text-center sm:text-2xl text-sm font-bold  my-10 mx-auto">No reviews yet.</p>
            )}
    </div>
  )

  const description = (
    <div>
      {loading && <p className="text-center sm:text-2xl text-sm font-bold ">Loading Product...</p>}
      {error && <p className="text-red-500 text-center sm:text-2xl text-sm font-bold ">{error}</p>}
      
      {
      product && typeof product === "object" ? (
        <div className="flex flex-col sm:justify-start p-3 justify-center sm:translate-x-14 sm:items-start mx-auto">

          <p className="font-bold text-lg my-1">Category: <small className="text-sm">{product.category}</small></p>
          <p className="font-bold text-lg mb-1">Life Stage: <small className="text-sm">{product.life_stage}</small></p>
          <h1 className="font-bold sm:text-lg text-sm my-2">Benefits of Renting Pet Accessories:</h1>
          <p className="text-lg id-h">Comfortable Fit</p>
            <p className="my-1 id-wid">* {product.fit}</p>

          <p className="text-lg mb-1 id-h">High-Quality Materials</p>
          <p  className="id-wid">* {product.functional_designs}</p>

          <p className="text-lg my-1 id-h">Easy to Use & Maintain</p>
          <p  className="id-wid">* {product.maintenance}</p>
        </div>
      ) 
     : (
      <p className="text-center sm:text-2xl text-sm font-bold ">Product not found. 🐾</p>
    )}
    </div>
  )
  return (
    <div>
      <div className="flex flex-col w-full">
      {productList}
      <div className="flex text-xl font-bold sm:text-2xl sm:gap-16 gap-5 p-3  sm:justify-start sm:translate-x-14 sm:items-start flex w-72 scroll-wi rounded-lg mx-2 scrollb sm:scrollbar-thumb-transparent  scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white my-2 ">
      <p className={`relative z-10 isolate cursor-pointer font-bold ${changeId === 1 ? "selecte" : "li"}`} onClick={() => handleChangeId(1)}>Description
      <div  className={`z-10 isolate translate-y-2 ${changeId === 1 ? "select" : 'li'}`}> </div>
      </p>
      <p className={`relative z-10 isolate cursor-pointer font-bold whitespace-nowrap ${changeId === 2 ? "selecte" : "li"}`}  onClick={() => handleChangeId(2)}>Shipping Information

      <div  className={`z-10 isolate translate-y-2 ${changeId === 2 ? "select" : 'li'}`}> </div>
      </p>
      <p className={`relative z-10 isolate cursor-pointer font-bold ${changeId === 3 ? "selecte" : "li"}`} onClick={() => handleChangeId(3)}>Reviews

      <div  className={`z-10 isolate translate-y-2 ${changeId === 3 ? "select" : 'li'}`}> </div>

      </p>
      </div>
      <div className="width-leght mx-auto -translate-y-3 sm:-translate-y-3 h-0.5 block bg-black "></div>
      <div  className={changeId === 1 ? "show-content" : "content"}>
      {description}
      </div>
      <div  className={changeId === 2 ? "show-content" : "content"}>
      Shipment Information
      </div>
      <div  className={changeId === 3 ? "show-content" : "content"}>
    <p className="font-bold text-center p-3  sm:justify-start sm:translate-x-16  flex-wrap flex mx-auto"><p className="inline-flex items-center">Reviews <span className="relative left-7 text-blue-700 text-sm bottom-2">{reviews.length}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={handleReviews}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
    </p>
    </p>
    <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${reviewView ? "block" : 'hidden'}`}>
      { product &&
      <ReviewsPage productId={product.id} handleReviews={handleReviews}/>
      }
    </div>
      {Reviews}
      </div>

    </div>
    </div>
  )
}

export default ShopPageId;
