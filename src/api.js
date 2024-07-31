import axios from 'axios';


export const fetchData = async () => {
     const url = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
