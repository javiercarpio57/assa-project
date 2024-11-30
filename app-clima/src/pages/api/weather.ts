import axios, { AxiosResponse } from 'axios';

const API_KEY = '1fbb6689cbf53863d8b826c73de86bee';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

interface Description {
	description: string;
	icon: string;
}

interface Wind {
	speed: number;
	deg: number;
}

export interface WeatherData {
	name: string;
	main: Main;
	weather: Description[];
	wind: Wind;
}

export const GetWeather = async (city: string): Promise<WeatherData> => {
	try {
		const response: AxiosResponse<WeatherData> = await axios.get(API_URL, {
			params: {
				q: city,
				appid: API_KEY,
				units: 'metric',
			},
		});
		console.log(response.data);

		return response.data;
	} catch (e) {
		throw new Error('Error while fetching weather data');
	}
};
