/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: isProd ? "/page-web" : "", 
    assetPrefix: isProd ? "/page-web" : "",
}

module.exports = nextConfig
