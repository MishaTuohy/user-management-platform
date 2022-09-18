module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: [
        '@typescipt-eslint',
        'prettier',
    ],
    ignorePatterns: [],
    overrides: [{
        files: ['*.spec.{ts. tsx}'],
    }],
};
