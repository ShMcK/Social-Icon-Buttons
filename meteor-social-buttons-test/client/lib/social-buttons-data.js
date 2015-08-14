var testURL = 'http://www.google.com';

SOCIAL_BUTTONS = {};

// Defaults
var DEFAULTS = {
  facebook: true,
  twitter: true,
  incrementing: false,
  useCount: false,
  incrementerSpeed: 150
};
var SOCIAL_OPTIONS = ['facebook', 'google', 'twitter'];

// Settings
var SETTINGS = _.extend(DEFAULTS, SOCIAL_BUTTONS.settings);
console.log(SETTINGS);

// Data
var SOCIAL_DATA = {
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

SOCIAL_BUTTONS.buttons = filterDataFromSettings(SETTINGS, SOCIAL_DATA, SOCIAL_OPTIONS);

SOCIAL_BUTTONS.open = function (socialTarget, url, title) {
  var url = encodeURI(url || document.URL);
  var title = encodeURI(title || document.title);
  SOCIAL_DATA[socialTarget].openWindow(url, title);
};

/**
 * Get Counts
 * adds selectedSocialButtons.count
 */
if (SETTINGS.useCount) {
  SOCIAL_BUTTONS.buttons.forEach(function (button) {
    $.ajax({
      type: 'GET',
      url: button.countAPI + encodeURI(testURL) + "&callback=?",
      contentType: 'application/json',
      dataType: 'jsonp',
      async: false,
      error: function (e) {
        console.log(e.message);
      },
      success: function (json) {
        button.count = json[button.measure];
        if (button.count) {
          if (!SETTINGS.incrementing) {
            /**
             * Update counts
             */
            return document.getElementsByClassName(button.name + '-count')[0].innerHTML = button.count;
          } else {

            /**
             * Increment Counts
             */
            function incrementCount(end, name) {
              var times = 0;
              var incrementer = {};
              incrementer[name] = setInterval(function () {
                ++times;
                var newValue = Math.ceil(end * (times / 10));
                document.getElementsByClassName(name + '-count')[0].innerHTML = newValue;
                if (times === 10) {
                  document.getElementsByClassName(name + '-count')[0].innerHTML = end;
                  window.clearInterval(incrementer[name]);
                }
              }, SETTINGS.incrementerSpeed);
            }

            SOCIAL_BUTTONS.buttons.forEach(function (button) {
              incrementCount(button.count, button.name);
            });
          }
        }
      }
    });
  });
}