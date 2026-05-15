/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'erikahanafin.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Pretty URLs for affiliate routing
      { source: '/joi', destination: 'https://joiandblokes.com/?rid=003UI00000gvOFcYAM', permanent: false },
      { source: '/stack', destination: 'https://www.amazon.com/shop/erikahanafin/list/2CW7UN8D55AN3?ref_=aip_sf_list_spv_ofs_mixed_d', permanent: false },
      // Common redirects
      { source: '/buy', destination: '/series', permanent: true },
      { source: '/all', destination: '/series', permanent: true },
      // Legacy /phase URL (was the old product page name pre-/series rebrand) → 301 to current Series page
      { source: '/phase', destination: '/series', permanent: true },
      // Lead funnel aliases · so any short-link or campaign UTM lands on /clarity
      { source: '/starter', destination: '/clarity', permanent: true },
      { source: '/kit', destination: '/clarity', permanent: true },
      { source: '/free', destination: '/clarity', permanent: true },
    ];
  },
};

export default nextConfig;
