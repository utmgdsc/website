/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			exclude: /.*icon\.svg$/i,
			type: 'asset',
		});
		return config;
	},
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
				hostname: process.env.PROPRIETARY_IMAGES_HOSTNAME || 'localhost',
			},
		],
	},
};

module.exports = nextConfig;
