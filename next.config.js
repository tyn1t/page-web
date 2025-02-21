/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    basePath: isProd ? "/page-web" : "", 
    assetPrefix: isProd ? "/page-web" : "",
}

module.exports = nextConfig
