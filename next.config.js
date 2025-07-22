  /** @type {import('next').NextConfig} */

 /** const path = require('path');
  const CopyWebpackPlugin = require('copy-webpack-plugin');


  const nextConfig = {
    images: {
      domains: ['api.dicebear.com', 'xsgames.co'],
    },
    reactStrictMode: true,
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
            to: path.join(__dirname, 'dist'),
          },
        ],
      }),

    ],
    entry: {
      main: './src/index.tsx',
      'pdf.worker': path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
  }

  module.exports = nextConfig */

/** @type {import('next').NextConfig} */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.dicebear.com', 'xsgames.co'],
  },
  output: 'standalone', // ✅ this is valid
  webpack: (config, { isServer }) => {
    // ✅ Add your custom plugin
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js'),
            to: path.join(__dirname, 'dist'),
          },
        ],
      })
    );

    // ✅ Optional: Customize entry if absolutely needed (usually not necessary in Next.js)
    // Note: Next.js manages entrypoints internally; override only if you know why

    return config;
  },
};

module.exports = nextConfig;