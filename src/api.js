import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://15734573-beec-42a6-9f83-e25fb78af6f2.mock.pstmn.io/hcassigment');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
