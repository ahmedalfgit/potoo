module.exports = {
    async rewrites( ) {
        return [ {
            source: '/api/path*',
            destination: 'https://potoo-flax.vercel.app/:path*',
        },
        ]
    },
};