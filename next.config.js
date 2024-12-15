/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ];
  },
  images: {
    domains: [
      'ec5e4302d4074115f056a3882a074256.cdn.cafebazaar.cloud',
      'media360.s3.ir-thr-at1.arvanstorage.com',
      'ec5e4302d4074115f056a3882a074256.cdn.edge.sotoon.ir',
      'sotoon.ir',
      'digifycdn.ir'
    ]
  }
};

module.exports = nextConfig;
