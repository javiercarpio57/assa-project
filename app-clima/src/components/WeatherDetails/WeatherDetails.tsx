import React from 'react';
import { WeatherData } from '../../pages/api/weather';

interface WeatherDetailsProps {
	weather: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
	return (
		<section className="flex justify-center">
			<div className="flex flex-col shadow-2xl rounded-lg w-full md:max-w-96 p-8">
				<div className="flex flex-col border-b border-gray-900/10 pb-6">
					<div className="flex justify-between">
						<div className="w-24 h-24">
							<img
								width="100%"
								height="100%"
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt="Weather Icon"
							/>
						</div>
						<div>
							<h2 className="text-lg uppercase font-light text-end">
								{weather.weather[0].description}
							</h2>
							<h3 className="text-5xl">
								{Number(weather.main.temp.toFixed(1))} °C
							</h3>
						</div>
					</div>
					<p className="uppercase font-light text-end">
						{weather.name}
					</p>
				</div>
				<div className="flex flex-col pt-6 gap-2">
					<div className="flex justify-between">
						<p className="opacity-50 font-bold">Viento</p>
						<p>{weather.wind.speed} mph</p>
					</div>
					<div className="flex justify-between">
						<p className="opacity-50 font-bold">Humedad</p>
						<p>{weather.main.humidity} %</p>
					</div>
					<div className="flex justify-between">
						<p className="opacity-50 font-bold">Presión</p>
						<p>{weather.main.pressure} in</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeatherDetails;
