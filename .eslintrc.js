module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    plugins: [
        'html'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'brace-style': ['error', '1tbs'],
        'keyword-spacing': ['error', {
            'after': true
        }],
        'eqeqeq': 2,
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}