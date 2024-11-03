import { useState } from "react";
import logo from './image/cat.jpg'
import { useQuery } from "@tanstack/react-query";
import { fetchCats } from "./api/axios";
function Favorite (){

    const [page, setPage] = useState(0)
    const [favorite, setFavorite] = useState([])


    const {
        data, 
        isLoading,
        isError,
        isFetching
    } = useQuery({
        queryKey: ["cat", page],
        queryFn: () =>fetchCats(page),
        keepPreviousData: true,
    });

    const handleFavorite = (cat) =>{

        setFavorite(prev =>{ 
            if(prev.some(fav => fav.id === cat.id)){
            return prev.filter(fav => fav.id !== cat.id)
            }
            return [...prev, cat]
        })
    }

    if (isLoading){
        return <div className="flex flex-col items-center justify-center my-56">
                  <img src={logo} width={70} height={70} alt="logo" className='rounded-full' />
                  <div className="bg-gray-300 w-40 h-1 rounded-3xl mt-5">
                  <p className="loading"></p>
                  </div>
                </div>
    }

    if(isError){
            <div className='flex flex-col items-center justify-center my-56'>
            <p className='text-white text-2xl mb-4'>Error loading cats</p>
            <button onClick={fetchCats} className='bg-green-400 text-white rounded-xl p-2 '>Refresh</button>
            </div>;
    }

    const content = (
        <div className="grid p-2 sm:grid-cols-3 grid-cols-1 gap-2 my-5">
            {
                data.map(cat =>(
                    <div>
                        <img src={cat.url} alt="cat-image" width={300} height={300} className="rounded-xl sm:w-72 sm:h-72 w-72 h-72"/>
                        <button className="text-white bg-orange-600 rounded-xl p-2 w-52 flex justify-center  items-center justify-items-center mx-auto my-3" onClick={() => handleFavorite(cat)}>{favorite.some(fav => fav.id === cat.id) ? "Unfavorite" : "Favorite" }</button>
                    </div>
                ))
            }
        </div>
    )

    const favorites = (
        <div>
            {
                favorite.map((fav, index) =>(
                    <div className="">
                        <img key={index} src={fav.url} alt="fav-image" width={300} height={300}/>
                        <button className={`bg-yellow-600 relative p-2 rounded-xl text-white w-16 flex justify-center items-center ${favorite ? "block" : "hidden" }`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </button>
                    </div>
                ))
            }
        </div>
    )
    return (
        <section className="flex flex-row gap-2">
            <div>
            <div className="flex justify-center items-center justify-items-center flex-row gap-8 mb-10 ">
                <button className="bg-red-600 p-2 rounded-xl text-white w-20" onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0 || isFetching}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </button>
                <button className="bg-green-600 p-2 rounded-xl text-white w-20" onClick={() => setPage((old) => (data.length < 10 ? old : old + 1))}
                    disabled={isFetching}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
                </div>
            {content}
            
            </div>
            <div className="p-2 border border-white border-r-0 border-l-2 border-t-0 border-b-0">
                <h1 className="text-white text-4xl">Favorite</h1>
            {favorites}
            </div>
        </section>
    )
}

export default Favorite