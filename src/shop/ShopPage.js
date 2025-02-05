import { useEffect, useState } from "react"
import { Api } from "../api/axios"

function ShopPage (){

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/source_code/product.php") // Update the URL if needed
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to store product in localStorage or global state
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 shadow-lg">
          <img
            src={`http://localhost/images/${product.image}`} // Change URL to match your setup
            alt={product.title}
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => window.location.href = `/product/${product.id}`} // Redirect to details page
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-pink-500 text-white px-4 py-2 mt-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShopPage;
