var SOCIAL_BUTTON_DEFAULTS = {
  social: {
    facebook: false,
    twitter: true,
    google: false
  },
  incrementing: false,
  useCount: false
};
var SOCIAL_BUTTON_SETTINGS = {
  useCount: true,
  incrementing: true
};
var SETTINGS = _.extend(SOCIAL_BUTTON_DEFAULTS, SOCIAL_BUTTON_SETTINGS);

/**
 * filter data to selected sources
 * @param selected
 * @param values
 * @returns {Array}
 */
function selectFromData(selected, values) {
  return _.keys(selected).
    filter(function (socialData) {
      return selected[socialData];
    }).
    map(function (socialData) {
      return values[socialData];
    });
}


var SOCIAL_BUTTON_DATA = {
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

var selectedSocialButtons = selectFromData(SETTINGS.social, SOCIAL_BUTTON_DATA);


/**
 * Get Counts
 * adds selectedSocialButtons.count
 */
if (SETTINGS.useCount) {
  selectedSocialButtons.forEach(function (button) {
    $.ajax({
      type: 'GET',
      url: button.countAPI + encodeURI(document.URL) + "&callback=?",
      contentType: 'application/json',
      dataType: 'jsonp',
      async: false,
      success: function (json) {
        button.count = json[button.measure];

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
            }, 100);
          }

          selectedSocialButtons.forEach(function (button) {
            console.log(button.count);
            console.log(button.name);
            incrementCount(button.count, button.name);
          });
        }
      },
      error: function (e) {
        console.error(e.message);
      }
    });
  });
}


Template.social_buttons.helpers({
  'socialButtons': function () {
    return selectedSocialButtons;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var socialTarget = event.currentTarget.id;
    event.preventDefault();
    var socialData = SOCIAL_BUTTON_DATA[socialTarget];
    socialData.openWindow(encodeURI(document.URL), encodeURI(document.title));
  }
});