socialData = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php',
    classNames: 'fa fa-facebook',
    name: 'facebook',
    openWindow: function (url, text) {
      window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    },
    measure: 'shares',
    countAPI: 'http://graph.facebook.com/?id='
  },
  google: {
    link: '//clients6.google.com/rpc?key=', // requires an API_KEY
    classNames: 'fa fa-google-plus',
    width: 300,
    height: 600,
    name: 'google',
    openWindow: function (url, text) {
      window.open('//plus.google.com/share?url=' + url,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300, width=600'
      );
    },
    measure: 'result.metadata.globalCounts.count',
    countAPI: '//plus.google.com/ripple/details?url='
  },
  twitter: {
    link: '//twitter.com/share',
    classNames: 'fa fa-twitter',
    name: 'twitter',
    openWindow: function (url, text) {
      window.open('//twitter.com/share?text=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
    },
    measure: 'count',
    countAPI: 'http://cdn.api.twitter.com/1/urls/count.json?url='
  },
  pinterest: {
    link: '//pinterest.com/pin/create/button/',
    classNames: 'fa fa-pinterest',
    name: 'pinterest',
    openWindow: function (url, text) {
      window.open('//pinterest.com/pin/create/button/?url=' + url + 'description=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=750,height=288');
    },
    measure: 'count',
    countAPI: 'http://api.pinterest.com/v1/urls/count.json?url='
  },
  delicious: {
    link: '//delicious.com/save',
    classNames: 'fa fa-delicious',
    name: 'delicious',
    openWindow: function (url, text) {
      window.open('//delicious.com/save?v=5&&noui&jump=close&url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    },
    measure: '0["totalPosts"]',
    countAPI: 'http://feeds.delicious.com/v2/json/urlinfo/data?url='
  },
  tumblr: {
    link: 'http://www.tumblr.com/share',
    classNames: 'fa fa-tumblr',
    name: 'tumblr',
    openWindow: function (url, text) {
      window.open('http://www.tumblr.com/share?v=3&u=' + url + '&t=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  pocket: {
    link: 'https://getpocket.com/save',
    classNames: 'fa fa-get-pocket',
    name: 'pocket',
    openWindow: function (url, text) {
      window.open('https://getpocket.com/save?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  reddit: {
    link: 'http://www.reddit.com/submit',
    classNames: 'fa fa-reddit',
    name: 'reddit',
    openWindow: function (url, text) {
      window.open('http://www.reddit.com/submit?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  linkedin: {
    link: 'http://www.linkedin.com/shareArticle',
    classNames: 'fa fa-linkedin',
    name: 'linkedin',
    openWindow: function (url, text) {
      window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    },
    measure: 'count',
    countAPI: 'http://www.linkedin.com/countserv/count/share?url='
  },
  wordpress: {
    link: 'http://wordpress.com/press-this.php',
    classNames: 'fa fa-wordpress',
    name: 'wordpress',
    openWindow: function (url, text) {
      window.open('http://wordpress.com/press-this.php?u=' + url + '&t=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  hackernews: {
    link: '//news.ycombinator.com/submitlink',
    classNames: 'fa fa-hacker-news',
    name: 'hackernews',
    openWindow: function (url, text) {
      window.open('//news.ycombinator.com/submitlink?u=' + url + '&t=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    }
  },
  mail: {
    link: 'mailto:',
    classNames: 'fa fa-send',
    name: 'mail',
    openWindow: function (url, text) {
      window.open('mailto:?subject=' + text + '&body=' + url);
    }
  },
  stumbledupon: {
    link: '',
    classNames: 'fa fa-stumbledupon',
    name: 'stumbledupon',
    openWindow: function (url, text) {

    },
    measure: 'result.views',
    countAPI: 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url='
  }
};

socialOptions = _.keys(socialData);
console.log(socialOptions);