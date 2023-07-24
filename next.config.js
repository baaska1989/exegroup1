
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  swcMinify: true,
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
    localeDetection: false,
  },
  trailingSlash: true,
  // output: 'export',
  // images: {
  //   loader: 'custom',
  //   loaderFile: './app/image.ts',
  // },
}

module.exports = nextConfig
