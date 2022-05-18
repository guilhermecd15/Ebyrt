module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest'
    },
    'plugins': [
        'react'
    ],
    'rules': {
      'camelcase': 'warn',
      'arrow-parens': [
        2,
        'always'
      ],
      'quotes': [
        2,
        'single'
      ],
      'implicit-arrow-linebreak': 'off',
      'consistent-return': 'off',
      'no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ],
      'object-curly-newline': 'off',
      'max-params': [
        'error',
        4
      ],
      'max-lines': [
        'error',
        250
      ],
      'max-len': [
        'error',
        100,
        {
          'ignoreComments': true
        }
      ],
      'complexity': [
        'error',
        12
      ]
    }
};
