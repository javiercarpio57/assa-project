import { render, screen, fireEvent } from '@testing-library/react';
import WeatherForm from './WeatherForm';
import React from 'react';

describe('Formulario de Weather', () => {
	it('Debe controlar el input de la ciudad y enviar el formulario', () => {
		const mockSubmit = jest.fn();
		const mockSetCity = jest.fn();

		render(
			<WeatherForm
				onSubmit={mockSubmit}
				city=""
				setCity={mockSetCity}
				isLoading={false}
			/>
		);

		// const form = screen.getByRole
		const input = screen.getByPlaceholderText('Ciudad de Guatemala');
		const button = screen.getByRole('button', { name: /ver clima/i });

		fireEvent.change(input, { target: { value: 'Ciudad de Guatemala' } });
		expect(mockSetCity).toHaveBeenCalledWith('Ciudad de Guatemala');

		fireEvent.click(button);
		expect(mockSubmit).toHaveBeenCalledTimes(1);
	});

	it('Debe deshabilitar el botón cuando está cargando', () => {
		const mockSubmit = jest.fn();
		const mockSetCity = jest.fn();

		render(
			<WeatherForm
				onSubmit={mockSubmit}
				city="Ciudad de Guatemala"
				setCity={mockSetCity}
				isLoading={true}
			/>
		);

		const button = screen.getByRole('button', { name: /ver clima/i });
		expect(button).toBeDisabled();
	});
});
