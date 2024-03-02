import axios from 'axios';

const API_BASE_URL = 'http://ec2-54-254-41-224.ap-southeast-1.compute.amazonaws.com:8080'; // Replace with your API base URL

export const fetchTutorialData = async () => {
  const url = `${API_BASE_URL}/api/tutorials`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching tutorial data:', error);
    throw error;
  }
};

export const postUser = async (userData) => {
  const url = `${API_BASE_URL}/api/users`; // Adjust the endpoint to match your server
  try {
    const response = await axios.post(url, userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user data:', error);
    throw error;
  }
};

// Add more functions for other API routes as needed
