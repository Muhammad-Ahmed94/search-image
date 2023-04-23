import axios from 'axios';

const apiSearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID LQ8Y-BJey754a1gUsnpKMUJC6fDgWucjuaGpSxqrEHc',
        },
        params:{
            query: term,
        },
    });

    console.log(response);
    return response.data.results;
}

export default apiSearchImages;