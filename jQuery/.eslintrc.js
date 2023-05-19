module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.js'],
    extends: ['devextreme/jquery'],
    env: {
      jquery: true
    },
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',
      'ecmaVersion': 2018
    },
    globals: {
      System: true,
      DevExpress: true
    }
  }]
};
