/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/:path*\\.glb",
        headers: [
          {
            key: "Content-Type",
            value: "model/gltf-binary",
          },
        ],
      },
      {
        source: "/:path*\\.usdz",
        headers: [
          {
            key: "Content-Type",
            value: "model/vnd.usdz+zip",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
