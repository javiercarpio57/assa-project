import React from 'react';

interface WeatherFormProps {
	city: string;
	setCity: (city: string) => void;
	onSubmit: (e: React.FormEvent) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({
	city,
	setCity,
	onSubmit,
}) => {
	return (
		<form
			onSubmit={onSubmit}
			className="flex flex-col w-full md:max-w-96 gap-4"
		>
			<div>
				<label
					htmlFor="city"
					className="block text-sm/6 font-medium text-gray-900"
				>
					Ingresa la ciudad
				</label>
				<input
					type="text"
					name="city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Ciudad de Guatemala"
					className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-950 sm:text-sm/6"
				/>
			</div>
			<div className="flex items-center justify-end gap-x-6">
				<button
					type="submit"
					className="block w-full rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
				>
					Ver clima
				</button>
			</div>
		</form>
	);
};

export default WeatherForm;
