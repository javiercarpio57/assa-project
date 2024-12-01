import { render, screen } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
import React from 'react';

const mockWeather = {
	weather: [{ icon: '10d', description: 'lluvia ligera' }],
	main: { temp: 21.91, humidity: 78, pressure: 1012 },
	wind: { speed: 5 },
	name: 'Ciudad de Guatemala',
};

describe('Detalles del clima', () => {
	it('Debe mostrar la información del clima correctamente', () => {
		render(<WeatherDetails weather={mockWeather} />);
		expect(screen.getByText('lluvia ligera')).toBeInTheDocument();
		expect(screen.getByText('21.9 °C')).toBeInTheDocument();
		expect(screen.getByText('Ciudad de Guatemala')).toBeInTheDocument();
		expect(screen.getByText('Humedad')).toBeInTheDocument();
		expect(screen.getByText('78 %')).toBeInTheDocument();
	});
});
