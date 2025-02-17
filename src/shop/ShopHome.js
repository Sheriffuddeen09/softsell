import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import Header from "../Layout/Header";
import Iconone from './image/Cat--Streamline-Font-Awesome 1.png'
import Icontwo from './image/Untitled design (14) 1.png'
import Iconthree from './image/Untitled design (15) 1.png'
import Iconfour from './image/Vector (10).png'
import Iconfive from './image/Vector (11).png'
import Iconsix from './image/Vector (12).png'
import { Link } from "react-router-dom";
import { cache } from "react";

const productUrl = 'http://localhost/source_code/image/'

const categories = [ {title:"Dogs", icon:Iconfour},{title:"Cats", icon:Iconone}, {title:"Pet Clothing", icon:Iconfive},{title:"Pet Carriers", icon:Icontwo},{title:"Dog & Cat Beds", icon:Iconthree}];

function ShopHome (){

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    

    const fetchProduct = async (category = '') =>{

      setError({})
      setLoading(true)
      
      let url = '/product.php'

      if (category && category !== 'All'){
        url += `?category=${encodeURIComponent(category)}`
      }
      setError({})
      setLoading(true)
      try {
        const response = await Api.get(url);
        console.log("API Response:", response.data); // Debugging
      
        if (Array.isArray(response.data.message)) {
          setProducts(response.data.message);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error Display Products", error);
      }
         finally{
          setLoading(false)
        }   
    }
    useEffect(() => {
    fetchProduct()
  }, []);

  const handleAddToCart = async (product) => {
    console.log("Added to cart:", product);
    const userId = parseInt(localStorage.getItem('user_id'), 10) || null;
    if (!userId) {
        console.error("User ID is missing");
        alert("You must be logged in to add items to the cart.");
        return
    }

    const quantity = 1
    const totalPrice = product ? quantity * parseFloat(product.price) + parseFloat(product.security_amount) : 0;

    const category = product?.category || "Uncategorized";

    const payload = {
      user_id :userId,
      quantity,
      product_id:product?.id || null,
      total_price:totalPrice,
      category
    }
    try{
      const response = await Api.post('/add_to_cart.php', JSON.stringify(payload),{
        headers: {'Content-Type': 'application/json'}
      })
      alert ('Product is Added Successfully')
    }
    catch (err) {console.log (err)} 
  };

  const productList = (
    <div className="grid sm:grid-cols-3 grid-cols gap-4 p-4 mx-auto justify-center justify-items-center ">
      { loading ? (
        <p>Loading Product</p>
      ) : products.length > 0 ?(products.map((product) => (
        <div className="relative  group">
        <div key={product.id} className="border p-4 shadow-lg sm:w-80 w-72 relative">
        <Link to={`/shop/${product.id}`}>
          <img
            src={`${productUrl}${product.image}`} // Change URL to match your setup
            alt={product.title}
            className="w-full h-64 object-cover cursor-pointer"
          />
          <h2 className="text-lg  group-hover:opacity-100 transition-opacity font-semibold mt-2 text-sm capitalize text-center">{product.title}</h2>
          <p className="text-gray-600 text-center  group-hover:opacity-100 transition-opacity">${product.price}</p>
        </Link>
        </div>
        </div>
      ))) : (<p>No Products to display</p>)}
    </div>
  );


  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
      {productList}
    </div>
    </div>
  )
}

export default ShopHome;
