Package.describe({
  name: 'shmck:meteor-social-buttons',
  version: '0.0.1',
  author: 'Shawn McKay',
  summary: 'Social Icon Buttons for Meteor',
  git: 'https://github.com/ShMcK/Social-Icon-Buttons',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use(['templating', 'fortawesome:fontawesome', 'underscore'], 'client');
  api.addFiles([
    'lib/social-buttons.html',
    'lib/defaults.js',
    'lib/data.js',
    'lib/functions.js',
    'lib/social-buttons.js',
    'lib/social-buttons-template.js',
    'lib/social-buttons.css'
  ], 'client');
  api.export('SocialButtons', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('fortawesome:fontawesome');
  api.use('shmck:meteor-social-buttons');
  api.addFiles('social-buttons-tests.js');
});