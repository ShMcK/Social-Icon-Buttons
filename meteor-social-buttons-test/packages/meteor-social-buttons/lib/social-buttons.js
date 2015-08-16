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

  open: function (socialTarget, url, title) {
    url = encodeURIComponent(url || document.URL);
    title = encodeURIComponent(title || document.title);
    socialData[socialTarget].openWindow(url, title);
    return false;
  },

  get: function () {
    return initButtons();
  },
  getSettings: function () {
    return this.settings;
  }
};


/**
 * Initialize SocialButtons
 */
function initButtons() {
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
  return SocialButtons.buttons;
}
