import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'https',
				hostname: process.env.PROPRIETARY_IMAGES_HOSTNAME ?? 'localhost',
			},
		],
		localPatterns: [
			{
				pathname: '/assets/**',
			},
			{
				pathname: '/_next/image/**',
			},
		],
	},
};

module.exports = nextConfig;
