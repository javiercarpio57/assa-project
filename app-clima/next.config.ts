import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		WEATHER_API_KEY: process.env.WEATHER_API_KEY,
	},
};

export default nextConfig;
