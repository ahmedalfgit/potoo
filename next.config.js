module.exports = {
    async rewrites( ) {
        return [ {
            source: '/:path*',
            destination: 'https://potoo-flax.vercel.app/:path*',
        },
        ]
    },
};