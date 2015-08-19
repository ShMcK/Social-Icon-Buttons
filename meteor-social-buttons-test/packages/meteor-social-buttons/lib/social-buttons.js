if (!SocialButtons) {

  SocialButtons = {
    options: {},

    config: function (options) {
      var validKeys = _.keys(defaults);
      _.keys(options).forEach(function (key) {
        if (_.indexOf(validKeys, key) >= 0) {
          SocialButtons.options[key] = options[key];
        } else {
          throw key + ' is not a valid SocialButtons key.';
        }
      });
    },

    open: function (socialTarget, url, text) {
      console.log(url);
      url = encodeURIComponent(url);
      text = encodeURIComponent(text);
      socialData[socialTarget].sharePath(url, text);
      return false;
    },

    getSettings: function () {
      return this.settings;
    }
  };
}

/**
 * Initialize SocialButtons
 */
Meteor.startup(function () {
  // Settings
  SocialButtons.settings = _.extend(defaults, SocialButtons.options);
  SocialButtons.buttons = filterDataFromSettings(SocialButtons.settings, socialData, socialOptions);

  /**
   * IF USECOUNT
   */
  if (SocialButtons.settings.useCount) {
    SocialButtons.buttons.forEach(function (button) {
      getJSONCount(button, document.URL).done(function (json) {
        var count = json[button.measure];
        if (isInteger(count)) {
          button.count = count;
        } else {
          button.count = 0;
          console.log('Error receiving ' + button.name + ' counts.');
        }
      }).then(function () {
        /**
         * IF INCREMENTING
         */
        if (SocialButtons.settings.incrementing) {
          /** Increment counts */
          SocialButtons.buttons.forEach(function (button) {
            incrementCount(button.count, button.name, SocialButtons.settings);
          });
        } else {
          /** Update counts */
          countSelector(button.name).text(button.count);
        }
      });
    });
  }
});
