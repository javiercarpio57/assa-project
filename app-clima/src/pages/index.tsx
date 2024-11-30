import { useState } from 'react';
import { GetWeather, WeatherData } from './api/weather';
import WeatherForm from '../components/WeatherForm';
import WeatherDetails from '../components/WeatherDetails';

export default function Home() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState<WeatherData | null>(null);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const weather = await GetWeather(city);
			setWeather(weather);
		} catch (e) {
			console.log('ERROR', e);
		}
	};

	return (
		<div className="min-h-screen p-8">
			<main className="flex flex-col gap-8">
				<h1 className="text-5xl font-bold">Weather App</h1>

				<div className="flex flex-col gap-12">
					<WeatherForm
						city={city}
						setCity={setCity}
						onSubmit={submit}
					/>
					{weather && <WeatherDetails weather={weather} />}
				</div>
			</main>
		</div>
	);
}
