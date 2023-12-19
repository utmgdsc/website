/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	webpack(config) {
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
				hostname: process.env.PROPRIETARY_IMAGES_HOSTNAME
					? process.env.PROPRIETARY_IMAGES_HOSTNAME
					: 'localhost',
			},
		],
	},
};

module.exports = nextConfig;
