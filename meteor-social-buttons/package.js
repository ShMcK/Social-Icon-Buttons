Package.describe({
  name: 'shmck:meteor-social-buttons',
  version: '0.3.1',
  author: 'Shawn McKay',
  summary: 'Social Icon Buttons for Meteor',
  git: 'https://github.com/ShMcK/Social-Icon-Buttons',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use([
    'jquery',
    'fortawesome:fontawesome@4.4.0',
    'underscore@1.0.4',
    'templating'
  ], 'client');
  api.addFiles([
    'lib/social-buttons.html',
    'lib/defaults.js',
    'lib/functions.js',
    'lib/social-buttons.js',
    'lib/data.js',
    'lib/social-buttons-template.js',
    'lib/social-buttons.css'
  ], 'client');
  api.export('SocialButtons', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('fortawesome:fontawesome@4.4.0');
  api.use('shmck:meteor-social-buttons');
  api.addAssets([
    'tests/client/index.html'
  ], 'client');
  api.addFiles([
    'tests/client/config.js'
  ], 'client');
  api.addFiles('tests/social-buttons.spec.js');
});
