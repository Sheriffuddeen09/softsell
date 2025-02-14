import { Link } from "react-router-dom";


const categoryUrl = 'http://localhost/source_code/category/'


function Category ({products, loading}){

    
    


    const titleColors = {
      "Breathable Cat Chest Straps": "bg-pink-300",
      "Cat Bed": "bg-teal-200",
      "Cat Clothing": "bg-pink-300",
      "Breathable Cat Chest Straps": "bg-teal-200",
      "Dogs Clothes":"bg-pink-300",
      "Pet Stroller":"bg-teal-200",
      "Pet Backpack Carrier for Cats and Puppies":"bg-pink-300",
      "The ultimate Smart Cat Litter Box is home":"bg-teal-200",
      "Cats Beds":"bg-pink-300",
      "Dog Bowls For Travel":"bg-teal-200",
      "Dog Beds":"bg-pink-300",
      "Dog Crystal Collar":"bg-teal-200", 
      "Default":"bg-pink-300"
    };

    const getButtonColor = (title) => titleColors[title] || titleColors["Default"];

   

  const productList = (
    <div className="grid sm:grid-cols-3 grid-cols gap-4 p-4 mx-auto justify-center justify-items-center ">
      { loading ? (
        <p>Loading Product</p>
      ) : products.length > 0 ?(products.map((product) => (
        <Link to={`/category/${product.id}`}>
        <div className="relative  group">
        <div key={product.id} className="relative group w-72 sm:w-80">
          {/* Product Image */}
          <img
            src={`${categoryUrl}${product.image}`}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          {/* Button Positioned Over Image */}
          <button
         
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center px-4 py- rounded-full w-60 justify-between text-black ${getButtonColor(product.title)}`}
          >
            <p  style={{fontSize:"12px"}} className="font-bold">{product.title}</p>
            <span className="text-lg bg-pink-700 p-1 rounded-full translate-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

          </span> {/* Arrow Icon */}
          </button>
        </div>
      <div className="absolute inset-0 bg-black  bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl "></div>
        </div>
        </Link>
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

export default Category;
