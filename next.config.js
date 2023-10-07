/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, { dev }) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack', 'url-loader'],
		});
		return config;
	},
	reactStrictMode: true,
	swcMinify: true,
	modularizeImports: {
		'@mui/icons-material': {
			transform: '@mui/icons-material/{{member}}',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'https',
				hostname: process.env.proprietary_images_hostname ? process.env.proprietary_images_hostname : 'localhost',
			},
		],
	},
};

module.exports = nextConfig;
