import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './image/cat.jpg'


const CatGallery = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);


    const fetchCats = async () => {
        setLoading(true); // Set loading state to true
        setError(null);
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
            setCats(response.data);
        } catch (error) {
            setError('Failed to load cat images. Please try again later.')
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    useEffect(() => {
        fetchCats(); // Fetch cats on component mount
    }, []);

    return (
        <div>
            <div className='flex flex-row justify-around items-center'>
     <      h1 className="my-4  font-bold text-3xl text-white">View Your Cat Picture</h1>
            <button onClick={fetchCats} className={`bg-green-400 text-white rounded-xl p-2 ${error ? "hidden" : "block"}`}>Refresh</button>
            </div>
            {loading && <div className="flex flex-col items-center justify-center my-56">
                  <img src={logo} width={70} height={70} alt="logo" className='rounded-full' />
                  <div className="bg-gray-300 w-40 h-1 rounded-3xl mt-5">
                  <p className="loading"></p>
                  </div>
                </div>}

            {error && <div className='flex flex-col items-center justify-center my-56'>
            <p className='text-white text-2xl mb-4'>{error}</p>
            <button onClick={fetchCats} className='bg-green-400 text-white rounded-xl p-2 '>Refresh</button>
            </div>}

            {!loading && !error && (
                 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                 {cats.map(cat => (
                     <div key={cat.id} style={{ margin: '10px' }}>
                         <img src={cat.url} alt="Cat" className='sm:w-80 w-72 h-60 rounded-xl ' />
                     </div>
                 ))}
               </div>
            )}
        </div>
    );
};

export default CatGallery;
