import axios, { AxiosResponse } from 'axios';

const API_KEY = '1fbb6689cbf53863d8b826c73de86bee';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface WeatherMain {
	temp: number;
	humidity: number;
}

interface WeatherDescription {
	description: string;
}

export interface WeatherData {
	name: string;
	main: WeatherMain;
	weather: WeatherDescription[];
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
