/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'carrectly.s3.amazonaws.com',
                port: '',
                pathname: '/public/**'
            },
            {
                protocol: 'https',
                hostname: 'prodcarrectlystorage.blob.core.windows.net',
                port: '',
                pathname: '/service-images-container/services/**'
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/carrectlywebbucket/images/Carrectly.Admin.Backend/Services/**'
            }
        ]
    },
}