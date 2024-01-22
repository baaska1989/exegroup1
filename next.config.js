const nextConfig = {
    reactStrictMode: true,
    experimental: {
        newNextLinkBehavior: false,
    },
    swcMinify: true,
    i18n: {
        locales: ['jp', 'en', 'cn'],
        defaultLocale: 'jp',
        localeDetection: false,
    },
    trailingSlash: true,
}

module.exports = nextConfig