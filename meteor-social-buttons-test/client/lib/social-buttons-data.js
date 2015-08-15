// Defaults
var defaults = {
  facebook: true,
  twitter: true,
  incrementing: false,
  useCount: false,
  incrementerSpeed: 150
};
var socialOptions = ['facebook', 'google', 'twitter'];
// Data
var socialData = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php?u={{url}}&t={{title}}',
    classNames: 'fa fa-facebook',
    name: 'facebook',
    measure: 'shares',
    openWindow: function (url, text) {
      window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, this.name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    },
    countAPI: "http://graph.facebook.com/?id="
  },
  google: {
    link: '//plus.google.com/share?url={{url}}',
    classNames: 'fa fa-google-plus',
    width: 300,
    height: 600,
    name: 'google'
  },
  twitter: {
    link: '//twitter.com/share?text={{title}}',
    classNames: 'fa fa-twitter',
    name: 'twitter',
    measure: 'count',
    openWindow: function (url, text) {
      window.open('//twitter.com/share?text=' + text, this.name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
    },
    countAPI: "http://cdn.api.twitter.com/1/urls/count.json?url="
  }
};

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
    url = encodeURI(url || document.URL);
    title = encodeURI(title || document.title);
    socialData[socialTarget].openWindow(url, title);
  },

  get: function () {
    return initButtons();
  }
};


function filterDataFromSettings(selected, values, shortList) {
  return _.keys(selected).
    filter(function (settingsKey) {
      return _.indexOf(shortList, settingsKey) !== -1
    }).
    filter(function (socialKey) {
      return selected[socialKey];
    }).
    map(function (socialKey) {
      return values[socialKey];
    });
}

/**
 * Increment Counts
 */
function incrementCount(end, name, settings) {
  var selector = countSelector(name);
  var times = 0;
  var incrementer = {};
  incrementer[name] = setInterval(function () {
    ++times;
    var newValue = Math.ceil(end * (times / 10));
    selector.text(newValue);
    if (times === 10) {
      selector.text(end);
      window.clearInterval(incrementer[name]);
    }
  }, settings.incrementerSpeed);
}


function countSelector(name) {
  return $("." + name + "-count");
}

function getJSONCount(button, url) {
  return $.getJSON(button.countAPI + encodeURI(url) + "&callback=?", function (json) {
    console.log(json);
    return json;
  });
}


function initButtons() {
  // Settings
  var settings = _.extend(defaults, SocialButtons.options);
  SocialButtons.buttons = filterDataFromSettings(settings, socialData, socialOptions);

  /**
   * IF USECOUNT
   */
  if (settings.useCount) {
    SocialButtons.buttons.forEach(function (button) {
      getJSONCount(button, document.URL).done(function (json) {
        if (json[button.measure]) {
          button.count = json[button.measure];
          console.log(button.name, button.count);
        } else {
          console.log('Error receiving ' + button.name + ' counts.');
        }
      }).then(function () {
        /**
         * IF INCREMENTING
         */
        if (settings.incrementing) {
          /** Increment counts */
          SocialButtons.buttons.forEach(function (button) {
            incrementCount(button.count, button.name, settings);
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
