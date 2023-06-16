/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://main--vermillion-narwhal-2cc999.netlify.app/:path*",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
