/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set this to your repo name if deploying to github.io/repo-name
  // basePath: '/your-repo-name',
}

export default nextConfig
