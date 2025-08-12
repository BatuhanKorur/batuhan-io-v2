import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/batuhan_korur_cv.pdf',
      },
    ]
  },
}

export default nextConfig
