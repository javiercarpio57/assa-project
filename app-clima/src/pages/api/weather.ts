import axios, { AxiosResponse } from 'axios';

const API_KEY = process.env.WEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface Main {
	temp: number;
	pressure: number;
	humidity: number;
}

interface Description {
	description: string;
	icon: string;
}

interface Wind {
	speed: number;
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

		return response.data;
	} catch (e) {
		throw new Error('Error while fetching weather data');
	}
};
