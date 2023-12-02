const {requestify} = require("next/dist/build/webpack/loaders/css-loader/src/utils");
/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextIntl = require('next-intl/plugin')(
    //This is the default (also the`src` folder is supported out of the box)
    './i18n.js'
);

module.exports = withNextIntl(nextConfig)
