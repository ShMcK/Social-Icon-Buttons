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
    return incrementCount(json.count, 'twitter');
  }
});

/* get facebook shares */
getJSON("http://graph.facebook.com/?id=http://" + url + "&callback=?", function (json) {
  console.log('facebook', json.shares);
  if (json.shares) {
    return incrementCount(json.shares, 'facebook');
  }
});

function incrementCount(end, name) {
  var times = 1;
  var incrementer = {};
  incrementer[name] = setInterval(function() {
    var newValue = Math.ceil(end * (times / 100));
    document.getElementsByClassName(name + '-count')[0].innerHTML = newValue;
    if (++times === 11) {
      document.getElementsByClassName(name + '-count')[0].innerHTML = end;
      window.clearInterval(incrementer[name]);
    }
  }, 100);
}