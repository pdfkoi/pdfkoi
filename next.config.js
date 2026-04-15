import path from 'node:path';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for production builds.
  // Local `next dev` should behave like a normal Next app so rewrites work.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  // Webpack configuration for WASM modules
  webpack: (config, { isServer, webpack }) => {
    // Handle qpdf-wasm and other modules that use Node.js built-ins
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        module: false,
        url: false,
        worker_threads: false,
        canvas: false,
      };
    }

    // Apply canvas shim to both server/client builds to avoid resolving optional Node canvas in pdfjs legacy bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      'canvas': path.resolve(process.cwd(), 'src/shims/canvas.js'),
    };

    if (!isServer) {
      // Browser bundle: shim Node-only `module` import path used by wasm helpers
      config.resolve.alias = {
        ...config.resolve.alias,
        'module': false,
      };
      // Ignore dynamic import of `module` in browser-only paths
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^module$/,
        })
      );
    }

    // Enable WebAssembly
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },

  // Image optimization configuration
  // Note: unoptimized is required for static export
  images: {
    unoptimized: true,
  },
  
  // Optimize large package imports - auto-split heavy libraries
  experimental: {
    optimizePackageImports: [
      'pdf-lib',
      'pdfjs-dist',
      'tesseract.js',
      'reactflow',
      'ag-psd',
      'lucide-react',
    ],
  },
  
  // Modularize imports for tree-shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
      skipDefaultConversion: true,
    },
  },

  // Keep trailing slashes for production static export only.
  // In `next dev`, next-intl normalizes locale routes without a trailing slash,
  // so forcing both styles creates a /zh-tw <-> /zh-tw/ redirect loop.
  trailingSlash: process.env.NODE_ENV === 'production',

  // Strict mode for better development experience
  reactStrictMode: true,

  // TypeScript configuration - skip type check in dev for faster HMR
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  // ESLint configuration - skip in dev for faster HMR
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },

  // Compiler options for performance
  compiler: {
    // Remove console.log in production
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  async redirects() {
    if (process.env.NODE_ENV !== 'development') {
      return [];
    }

    return [
      {
        source: '/en',
        destination: '/',
        permanent: false,
      },
      {
        source: '/en/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    if (process.env.NODE_ENV !== 'development') {
      return [];
    }

    return {
      beforeFiles: [
        {
          source: '/tools',
          destination: '/en/tools',
        },
        {
          source: '/tools/:path+',
          destination: '/en/tools/:path+',
        },
        {
          source: '/workflow',
          destination: '/en/workflow',
        },
        {
          source: '/about',
          destination: '/en/about',
        },
        {
          source: '/faq',
          destination: '/en/faq',
        },
        {
          source: '/privacy',
          destination: '/en/privacy',
        },
        {
          source: '/cookies',
          destination: '/en/cookies',
        },
        {
          source: '/contact',
          destination: '/en/contact',
        },
        {
          source: '/terms',
          destination: '/en/terms',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

};

export default withNextIntl(nextConfig);
