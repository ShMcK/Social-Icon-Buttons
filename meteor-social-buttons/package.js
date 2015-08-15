Package.describe({
  name: 'meteor-social-buttons',
  version: '0.0.1',
  author: 'Shawn McKay',
  summary: 'Social Icon Buttons for Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
    'client/lib/social-buttons-data.js',
    'client/lib/social-buttons.js',
    'client/lib/social-buttons.html',
    'client/lib/social-buttons.css'
  ], ['client']);
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-social-buttons');
  api.addFiles('social-buttons-tests.js');
});
