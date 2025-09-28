/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg)$/,
            type: 'asset/resource',
        });
        return config;
    },
    output: 'export',
    images: {
        unoptimized: true, // disables Image Optimization API
    },
    distDir: 'out'
};

module.exports = nextConfig;
