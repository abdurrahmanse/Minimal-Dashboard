import globals from 'globals';
import eslintJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

// ----------------------------------------------------------------------

/**
 * @rules common
 * from 'react', 'eslint-plugin-react-hooks'...
 */
const commonRules = () => ({
  ...reactHooksPlugin.configs.recommended.rules,
  'func-names': 1,
  'no-bitwise': 2,
  'no-unused-vars': 0,
  'object-shorthand': 1,
  'no-useless-rename': 1,
  'default-case-last': 2,
  'consistent-return': 2,
  'no-constant-condition': 1,
  'default-case': [2, { commentPattern: '^no default$' }],
  'lines-around-directive': [2, { before: 'always', after: 'always' }],
  'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
  'no-undef': 0,
  'no-undef': 0,
  // react
  'react/jsx-key': 0,
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/no-children-prop': 0,
  'react/jsx-boolean-value': 2,
  'react/self-closing-comp': 2,
  'react/react-in-jsx-scope': 0,
  'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
  'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
});

/**
 * @rules import
 * from 'eslint-plugin-import'.
 */
const importRules = () => ({
  ...importPlugin.configs.recommended.rules,
  'import/no-unresolved': 0,
  'import/named': 0,
  'import/export': 0,
  'import/default': 0,
  'import/namespace': 0,
  'import/no-named-as-default': 0,
  'import/newline-after-import': 2,
  'import/no-named-as-default-member': 0,
  'import/no-cycle': [
    0, // disabled if slow
    { maxDepth: '∞', ignoreExternal: false, allowUnsafeDynamicCyclicDependency: false },
  ],
});

/**
 * @rules unused imports
 * from 'eslint-plugin-unused-imports'.
 */
const unusedImportsRules = () => ({
  'unused-imports/no-unused-imports': 0,
  'unused-imports/no-unused-vars': [
    0,
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],
});

/**
 * @rules sort or imports/exports
 * from 'eslint-plugin-perfectionist'.
 */
const sortImportsRules = () => {
  const customGroups = {
    mui: ['custom-mui'],
    auth: ['custom-auth'],
    hooks: ['custom-hooks'],
    utils: ['custom-utils'],
    types: ['custom-types'],
    routes: ['custom-routes'],
    sections: ['custom-sections'],
    components: ['custom-components'],
  };

  return {
    'perfectionist/sort-named-imports': 1,
    'perfectionist/sort-named-exports': 1,
    'perfectionist/sort-exports': 1,
    'perfectionist/sort-imports': 2,
  };
};

/**
 * Custom ESLint configuration.
 */
export const customConfig = {
  plugins: {
    'react-hooks': reactHooksPlugin,
    'unused-imports': unusedImportsPlugin,
    perfectionist: perfectionistPlugin,
    import: importPlugin,
  },
  settings: {
    // https://www.npmjs.com/package/eslint-import-resolver-typescript
    ...importPlugin.configs.typescript.settings,
    'import/resolver': {
      ...importPlugin.configs.typescript.settings['import/resolver'],
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    ...commonRules(),
    ...importRules(),
    ...unusedImportsRules(),
    ...sortImportsRules(),
  },
};

// ----------------------------------------------------------------------

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['*', '!src/', '!eslint.config.*'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      },
    },
    settings: { react: { version: 'detect' } },
  },
  eslintJs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  customConfig,
];
