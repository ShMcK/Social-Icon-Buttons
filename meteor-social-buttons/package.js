Package.describe({
  name: 'meteor-social-buttons',
  version: '0.0.1',
  author: 'Shawn McKay <me@shmck.com>',
  summary: 'Social Icon Buttons for Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('social-buttons.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-social-buttons');
  api.addFiles('social-buttons-tests.js');
});
