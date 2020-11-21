module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    850: '#292b2f'
                }
            }
        },
    },
    variants: {
        extend: {},
        width: ['responsive', 'focus', 'hover'],
        borderRadius: ['hover', 'focus'],
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}
