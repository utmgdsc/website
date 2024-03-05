/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			type: 'asset',
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

	compiler: {
		styledComponents: true,
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
