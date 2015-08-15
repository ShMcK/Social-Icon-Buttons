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
  api.use(['templating', 'fortawesome:fontawesome'], 'client');
  api.addFiles([
    'client/lib/social-buttons.html',
    'client/lib/social-buttons-data.js',
    'client/lib/social-buttons.js',
    'client/lib/social-buttons.css'
  ], 'client');
  api.export('SocialButtons', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('fortawesome:fontawesome');
  api.use('shmck:meteor-social-buttons');
  api.addFiles('social-buttons-tests.js');
});
