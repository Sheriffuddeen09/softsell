import { useEffect, useState } from "react"
import { Api } from "../api/axios"

function ReviewsPage ({productId, handleReviews}){


    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState(1)
    const [userId, setUserId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    useEffect(() =>{
     
        const storeUserId = localStorage.getItem('user_id')
        if (storeUserId){
            setUserId(storeUserId)
        } 
    }, [])

    const handleSubmitReview = async (e) =>{

        setLoading(true)
        setMessage(true)
        e.preventDefault();
        if (!userId) {
            alert("User not logged in!");
            return;
        }
            try{
        const response = await Api.post('/review.php', {
            user_id:userId,
            product_id:productId,
            review_text:reviewText,
            rating
        }, {
            headers: {'Content-Type' : 'appliction/json'},
            withCredentials:true
        })
        setMessage("Reviews is Added successfully")

        console.log(response.data)
    }
    catch(err){
        
    }
    finally{
        setLoading(false)
    }

    }
    return (

        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative top-2 sm:top-0 cursor-pointer  sm:left-32 left-28" onClick={handleReviews}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
            <form onSubmit={handleSubmitReview}>
                <div className = 'flex flex-col'>
            <label className='font-bold text-xl'>Rating:</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-32 border rounded border-2 border-pink-700 p-2">
                {[5, 4, 3, 2, 1].map(num => <option key={num} value={num}>{num}⭐</option>)}
            </select>
            </div>
            <div className = 'flex flex-col'>
            <label className='font-bold text-xl'>Review:</label>
            <textarea className="border-pink-700 border p-3 rounded border-2 sm:w-72 w-60 h-40" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
            </div>
            <button type="submit" className='bg-pink-700 p-2 my-2 rounded w-32 text-white' disabled={loading || !reviewText || !rating}>{ loading ? "Submiting...." : "Submit Review" }</button>

            {message && <p>{message}</p>}
        </form>

        </div>
    )
}
export default ReviewsPage