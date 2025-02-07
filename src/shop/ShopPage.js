import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import axios from "axios";
import Header from "../Layout/Header";
import Iconone from './image/Cat--Streamline-Font-Awesome 1.png'
import Icontwo from './image/Untitled design (14) 1.png'
import Iconthree from './image/Untitled design (15) 1.png'
import Iconfour from './image/Vector (10).png'
import Iconfive from './image/Vector (11).png'
import Iconsix from './image/Vector (12).png'

const productUrl = 'http://localhost/source_code/image/'

const categories = [ {title:"Dogs", icon:Iconfour},{title:"Cats", icon:Iconone}, {title:"Pet Clothing", icon:Iconfive},{title:"Pet Carriers", icon:Icontwo},{title:"Dog & Cat Beds", icon:Iconthree}];

function ShopPage (){

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    

    const fetchProduct = async (category = '') =>{

      setError({})
      setLoading(true)
      
      const url = category === 'All' ? "/product.php" : `${`/product.php?category=${category}`}`
      setError({})
      setLoading(true)
        try{
          const response = await Api.get(url)
          if(Array.isArray(response.data.message)){
            setProducts(response.data.message)
          }
          else{
            setProducts([])
          }
        }
        catch (error) {
          console.error("Error Display Products", error);
          }
        finally{
          setLoading(false)
        }   
    }
    useEffect(() => {
    fetchProduct()
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to store product in localStorage or global state
  };

  const productList = (
    <div className="grid sm:grid-cols-3 grid-cols gap-4 p-4 mx-auto justify-center justify-items-center ">
      { loading ? (
        <p>Loading Product</p>
      ) : products.length > 0 ?(products.map((product) => (
        <div className="relative  group">
        <div key={product.id} className="border p-4 shadow-lg sm:w-80 w-72 relative">
          <img
            src={`${productUrl}${product.image}`} // Change URL to match your setup
            alt={product.title}
            className="w-full h-64 object-cover cursor-pointer"
            // onClick={() => window.location.href = `/product/${product.id}`} // Redirect to details page
          />
          <h2 className="text-lg font-semibold mt-2 text-sm capitalize text-center">{product.title}</h2>
          <p className="text-gray-600 text-center">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-pink-500 text-white px-4  group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl hover:bg-black hover:text-white relative z-10 py-2 mt-2 rounded w-60 mx-auto flex justify-center"
          >
            Add to Cart
          </button>
        </div>
      <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl "></div>
        </div>
      ))) : (<p>No Products to display</p>)}
    </div>
  );

  const categorylist = (
    <>
      <div className="flex w-60 scroll-wi rounded-lg mx-2 scrollb sm:scrollbar-thumb-transparent  scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white  mx-auto my-2 gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "w-52 border border-pink-400 shadow-md whitespace-nowrap sma font-bold flex flex-col justify-center items-center mx-auto bg-pink-500 hover:bg-gray-200 hover:text-black  h-16 text-white px-4  rounded" : "flex flex-col justify-center items-center sma font-bold whitespace-nowrap mx-auto px-3  h-16 rounded border hover:bg-gray-200 hover:text-black w-52 border border-pink-400 shadow-md"}
            onClick={() => {
              setSelectedCategory(category);
              fetchProduct(category);
            }}
          >
            <img src={category.icon} alt="icon" className="h-6 sm:h-8"/>
            {category.title}
          </button>
        ))}
      </div>
    </>
  )

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full">
      <div className="inline-flex items-center justify-items-center gap-3 justify-center mx-auto">
      {categorylist}
      <img src={Iconsix} alt="icon" className="h-6 w-6 cursor-pointer" onClick={() =>{
        setSelectedCategory('All'); fetchProduct('All')
      }}/>
      </div>
      {productList}
    </div>
    </div>
  )
}

export default ShopPage;
