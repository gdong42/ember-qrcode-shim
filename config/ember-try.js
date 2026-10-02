'use strict';

module.exports = {
  packageManager: 'npm',
  npmOptions: ['--prefer-offline'],
  scenarios: [
    {
      name: 'ember-3.28',
      env: { EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': false }) },
      npm: {
        devDependencies: {
          // Ember 3.28 still requires the CLI's removed bowerDependencies API.
          'ember-cli': '~4.12.3',
          'ember-source': '~3.28.12',
          'ember-qunit': '^6.2.0',
          '@ember/test-helpers': '^2.9.4',
          'ember-resolver': '^8.1.0'
        }
      }
    },
    {
      name: 'ember-4.12',
      npm: {
        devDependencies: {
          'ember-cli': '~6.12.0',
          'ember-source': '~4.12.4',
          'ember-qunit': '^8.1.1',
          '@ember/test-helpers': '^3.3.1',
          'ember-resolver': '^11.0.1'
        }
      }
    }
  ]
};
