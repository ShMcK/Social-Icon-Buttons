// https://gist.github.com/jonathanmoore/2640302
var url = document.URL;
var text = document.title;

function callFacebookAPI() {
  window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

function callTwitterAPI() {
  window.open('//twitter.com/share?text=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
}

function getJSONP(url, success) {

  var ud = '_' + +new Date,
    script = document.createElement('script'),
    head = document.getElementsByTagName('head')[0]
      || document.documentElement;

  window[ud] = function (data) {
    head.removeChild(script);
    success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);
}

var countUp, setCount;

/* get twitter count */
getJSONP("http://cdn.api.twitter.com/1/urls/count.json?url=" + url + "&callback=?", function (json) {
  console.log('twitter', json.count);
  if (json.count) {
    return document.getElementsByClassName('twCount')[0].innerHTML = json.count;
  }
  //return setCount($(".twCount"), json.count);
});

/* get facebook shares */
getJSONP("http://graph.facebook.com/?id=http://" + url + "&callback=?", function (json) {
  console.log('facebook', json.shares);
  if (json.shares) {
    return document.getElementsByClassName("fbCount")[0].innerHTML = json.shares;
  }
});

//countUp = function (item) {
//  return setTimeout(function () {
//    var current, newCount, target;
//    current = item.attr("data-current-count") * 1;
//    target = item.attr("data-target-count") * 1;
//    newCount = current + Math.ceil((target - current) / 2);
//    item.attr("data-current-count", newCount);
//    item.html(newCount);
//    if (newCount < target) {
//      return countUp(item);
//    }
//  }, 100);
//};

//setCount = function (item, count) {
//  if (count == null) {
//    count = null;
//  }
//  item.attr("data-target-count", count);
//  item.attr("data-current-count", 0);
//  return countUp(item);
//};