import axios from 'axios';

const fetchCats = async (page) => {
    const limit = 10;
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`);
    return response.data;
};

export { fetchCats };
