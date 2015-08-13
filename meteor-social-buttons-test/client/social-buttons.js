var SOCIAL_BUTTON_DEFAULTS = {
  facebook: true,
  twitter: true,
  google: false,
  incrementing: false
};
var SOCIAL_BUTTON_SETTINGS = {
  incrementing: false
};
var SETTINGS = _.extend(SOCIAL_BUTTON_DEFAULTS, SOCIAL_BUTTON_SETTINGS);

function selectFromData(selected, values) {
  var array = [];
  for (var key in selected) {
    if (selected.hasOwnProperty(key) && selected[key]) {
      array.push(values[key]);
    }
  }
  return array;
}

var SOCIAL_BUTTON_DATA = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php?u={{url}}&t={{title}}',
    classNames: 'fa fa-facebook',
    name: 'facebook',
    measure: 'shares',
    openWindow: function (url, text) {
      window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, this.name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    }
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
    measure: 'counts',
    openWindow: function (url, text) {
      window.open('//twitter.com/share?text=' + text, this.name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
    }
  }
};

var selectedSocialButtons = selectFromData(SETTINGS, SOCIAL_BUTTON_DATA);

function incrementCount(endValue, name) {
  var times = 0;
  var incrementer = {};
  incrementer[name] = setInterval(function () {
    // set new current
    var newValue = Math.ceil(endValue / times);
    // change DOM value
    document.getElementsByClassName(name + '-count')[0].innerHTML = newValue;
    // exit on 10th increment
    if (++times === 10) {
      window.clearInterval(incrementer[name]);
    }
  }, 100);
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