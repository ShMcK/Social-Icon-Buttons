/**
 * Functions
 */

filterDataFromSettings = function filterDataFromSettings(selected, values, shortList) {
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
};

/**
 * Increment Counts
 */
incrementCount = function incrementCount(end, name, settings) {
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
};


countSelector = function countSelector(name) {
  return $("." + name + "-count");
};

getJSONCount = function getJSONCount(button, url) {
  return $.getJSON(button.countAPI + encodeURIComponent(url) + "&callback=?", function (json) {
    return json;
  });
};

isInteger = function isInteger(n) {
  return n % 1 === 0;
};