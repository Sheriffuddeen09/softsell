import { useEffect, useState } from "react"
import { Api } from "../api/axios"
import axios from "axios";
import Header from "../Layout/Header";

const productUrl = 'http://localhost/source_code/image/'

const categories = ["All", "Dogs", "Cats", "Pet Clothing", "Pet Carriers", "Dog & Cat Beds"];

function ShopPage (){

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchProduct = async (category = '') => {

      const url = category === 'All' ? "/product.php" : `${`/product.php?category=${category}`}`
      setError({})
      setLoading(true)
        Api.get(url)
        .then(response => setProducts(response.data))
        .catch(error => {
          console.error("Error Display Products", error);
          setError(error);
        })
        .finally(() => setLoading(false));
    }
    
  useEffect(() => {
    fetchProduct()
  }, []);

  const handleAddToCart = async (product) => {

    const payload = {
      product_id: product.id,
      image: product.image,
      quantity: product.quantity,
      location: product.location,
      price: product.price,
      description:product.description

    }
    Api.post('/add_to_cart', payload)
   .then(alert(`${product.name} added to cart`))
   .catch(err => console.error(err))
  };

  const categorylist = (
    <>
      <div className="flex flex-wrap sm:my-4 sm:gap-5 justify-center gap-1 p-1">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "bg-pink-500 hover:bg-gray-500 hover:text-white  h-10 text-white px-4 py-2 rounded" : "px-3 py-2 h-10 rounded border hover:bg-gray-500 hover:text-white shadow-md"}
            onClick={() => {
              setSelectedCategory(category);
              fetchProduct(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
  const productList = (
    <div className="grid grid-cols-3 justify-items-center gap-4 p-4">
        {loading ? (
          <p>Loading Products...</p>
        ) : error ? (
          <p className="text-red-500">Error loading products</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 shadow-lg">
              <img
                src={`${productUrl}${product.image}`}
                alt={product.name}
                className="w-full h-40 object-cover cursor-pointer"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-pink-500 text-white px-4 py-2 mt-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No Products to display</p>
        )}
      </div>
  );
  return (
    <div>
      <Header />
      {categorylist}
      {productList}
    </div>
  )
}

export default ShopPage;
