import axios from 'axios';
import { FoodResponse } from '../types/food';

const API_URL =
  'https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json';

export const getFoodData = async (): Promise<FoodResponse> => {
  try {
    const response = await axios.get<FoodResponse>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching food data');
  }
};
