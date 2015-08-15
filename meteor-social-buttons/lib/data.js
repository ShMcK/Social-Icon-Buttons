socialData = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php',
    classNames: 'fa fa-facebook',
    name: 'facebook',
    measure: 'shares',
    openWindow: function (url, text) {
      window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text, this.name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    },
    countAPI: 'http://graph.facebook.com/?id='
  },
  google: {
    link: '//plus.google.com/share}',
    classNames: 'fa fa-google-plus',
    width: 300,
    height: 600,
    name: 'google'
  },
  twitter: {
    link: '//twitter.com/share',
    classNames: 'fa fa-twitter',
    name: 'twitter',
    measure: 'count',
    openWindow: function (url, text) {
      window.open('//twitter.com/share?text=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
    },
    countAPI: 'http://cdn.api.twitter.com/1/urls/count.json?url='
  },
  pinterest: {
    link: '//pinterest.com/pin/create/button/',
    classNames: 'fa fa-pinterest',
    name: 'pinterest',
    measure: 'count',
    openWindow: function (url, text) {
      window.open('//pinterest.com/pin/create/button/?url=' + url + 'description=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=750,height=288');
    },
    countAPI: 'http://api.pinterest.com/v1/urls/count.json?url='
  },
  delicious: {
    link: '//delicious.com/save',
    classNames: 'fa fa-delicious',
    name: 'delicious',
    measure: '0["totalPosts"]',
    openWindow: function (url, text) {
      window.open('//delicious.com/save?v=5&&noui&jump=close&url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    },
    countAPI: 'http://feeds.delicious.com/v2/json/urlinfo/data?url='
  }
};

socialOptions = _.keys(socialData);
console.log(socialOptions);