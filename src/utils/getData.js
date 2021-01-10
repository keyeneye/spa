const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API
    try {
        const respose = await fetch(apiURL);
        const data = await respose.json();
        return data;      
    } catch (error) {
        console.log('Fetch error', error)
    }
};

export default getData;