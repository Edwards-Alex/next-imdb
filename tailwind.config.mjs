// tailwind.config.mjs
const tailwindConfig = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors:{
                background:"var(--background)",
                foreground:"var(--foreground)",
            },
        },
    },
    plugins: [],
    darkMod:'class',
};

export default tailwindConfig;