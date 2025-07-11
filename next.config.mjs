/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  trailingSlash: true,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
    // formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  webpack: (config, { dev, isServer }) => {
    // ignore کردن warnings در production
    if (!dev && !isServer) {
      config.stats = {
        warnings: false,
      };
    }
    return config;
  },

  experimental: {
    // optimizeCss: true,
    optimizePackageImports: [
      '@tanstack/react-query',
      'react-icons',
      'framer-motion',
      'date-fns',
      'daisyui',
      'formik',
      'js-cookie',
      'lucide-react',
      'nuqs',
      'react-avatar-editor',
      'react-modal',
      'swiper',
      'yup',
    ],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
