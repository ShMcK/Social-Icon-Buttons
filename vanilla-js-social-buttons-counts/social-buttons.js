var url = encodeURI(document.URL);
var text = encodeURI(document.title);

function callFacebookAPI() {
  window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

function callTwitterAPI() {
  window.open('//twitter.com/share?text=' + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
}

function getJSON(url, success) {

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

/* get twitter count */
getJSON("http://cdn.api.twitter.com/1/urls/count.json?url=" + url + "&callback=?", function (json) {
  console.log('twitter', json.count);
  if (json.count) {
    return incrementCount(json.count, 'twCount');
  }
});

/* get facebook shares */
getJSON("http://graph.facebook.com/?id=http://" + url + "&callback=?", function (json) {
  console.log('facebook', json.shares);
  if (json.shares) {
    return incrementCount(json.shares, 'fbCount');
  }
});

function incrementCount(endValue, name) {
  var times = 0;
  var incrementer = {};
  incrementer[name] = setInterval(function () {
    // set new current
    var newValue = Math.ceil(endValue / times);
    // change DOM value
    document.getElementsByClassName(name)[0].innerHTML = newValue;
    // exit on 10th increment
    if (++times === 10) {
      window.clearInterval(incrementer[name]);
    }
  }, 100);
}