document.ready(function () {
  var countUp, setCount, url;

  url = "http://colourco.de/";

  $.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=" + url + "&callback=?", function (json) {
    return setCount($(".twCount"), json.count);
  });

  $.getJSON("http://graph.facebook.com/" + url, function (json) {
    return setCount($(".fbCount"), json.shares);
  });

  $.getJSON("http://api.pinterest.com/v1/urls/count.json?url=" + url + "&callback=?", function (json) {
    return setCount($(".prCount"), json.count);
  });

  $.getJSON("http://www.linkedin.com/countserv/count/share?url=" + url + "&callback=?", function (json) {
    return setCount($(".liCount"), json.count);
  });

  $.getJSON("http://feeds.delicious.com/v2/json/urlinfo/data?url=" + url + "&callback=?", function (json) {
    return setCount($(".dlCount"), json[0].total_posts);
  });

  countUp = function ($item) {
    return setTimeout(function () {
      var current, newCount, target;
      current = $item.attr("data-current-count") * 1;
      target = $item.attr("data-target-count") * 1;
      newCount = current + Math.ceil((target - current) / 2);
      $item.attr("data-current-count", newCount);
      $item.html(newCount);
      if (newCount < target) {
        return countUp($item);
      }
    }, 100);
  };

  setCount = function ($item, count) {
    if (count == null) {
      count = null;
    }
    $item.attr("data-target-count", count);
    $item.attr("data-current-count", 0);
    return countUp($item);
  };
});