/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en", "pt-BR"],
    defaultLocale: "default",
    localeDetection: true,
  },
};

module.exports = nextConfig;
