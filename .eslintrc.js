module.exports = {
    env: {
      browser: true,
      jest: true,
      es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'react-hooks'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'import/prefer-default-export': 'off',
      'react/destructuring-assignment': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
      'import/resolver': {
        'babel-plugin-root-import': {
          rootPathSuffix: 'src',
        },
      },
    },
  };