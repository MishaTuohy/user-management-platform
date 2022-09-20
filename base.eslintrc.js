module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescipt-eslint',
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    overrides: [{
        files: ['*.spec.{ts. tsx}'],
    }],
};
