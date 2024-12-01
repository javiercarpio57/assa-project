import { useState } from 'react';
import { GetWeather, WeatherData } from './api/weather';
import WeatherForm from '../components/WeatherForm/WeatherForm';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails';
import Footer from '../components/Footer/Footer';
import React from 'react';

export default function Home() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const weather = await GetWeather(city);
			setError(null);
			setWeather(weather);
		} catch (e) {
			setWeather(null);
			setError(`No fue posible encontrar la ciudad: ${city}`);
		} finally {
			setIsLoading(false);
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
						isLoading={isLoading}
					/>
					{error && <p className="text-red-600">{error}</p>}
					{weather && <WeatherDetails weather={weather} />}
				</div>
			</main>
			<Footer />
		</div>
	);
}
