socialData = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php',
    classNames: 'fa fa-facebook',
    name: 'facebook',
    sharePath: function (url, text) {
     return ('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + useVia() + text,
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
    sharePath: function (url, text) {
      return ('//plus.google.com/share?url=' + url + '?text=' + useVia() + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300, width=600'
      );
    }
  },
  twitter: {
    link: '//twitter.com/share',
    classNames: 'fa fa-twitter',
    name: 'twitter',
    sharePath: function (url, text) {
      return ('//twitter.com/share?url=' + url + '&text=' + useVia() + text,
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
    sharePath: function (url, text) {
      return ('//pinterest.com/pin/create/button/?url=' + url + '&description=' + useVia() + text,
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
    sharePath: function (url, text) {
      return ('//delicious.com/save?v=5&&noui&jump=close&url=' + url + '&title=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  tumblr: {
    link: 'http://www.tumblr.com/share',
    classNames: 'fa fa-tumblr',
    name: 'tumblr',
    sharePath: function (url, text) {
      return ('http://www.tumblr.com/share?v=3&u=' + url + '&t=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  pocket: {
    link: 'https://getpocket.com/save',
    classNames: 'fa fa-get-pocket',
    name: 'pocket',
    sharePath: function (url, text) {
      return ('https://getpocket.com/save?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  reddit: {
    link: 'http://www.reddit.com/submit',
    classNames: 'fa fa-reddit',
    name: 'reddit',
    sharePath: function (url, text) {
      return('http://www.reddit.com/submit?url=' + url + '&title=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  linkedin: {
    link: 'http://www.linkedin.com/shareArticle',
    classNames: 'fa fa-linkedin',
    name: 'linkedin',
    sharePath: function (url, text) {
      return('http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + useVia() + text,
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
    sharePath: function (url, text) {
      return ('http://wordpress.com/press-this.php?u=' + url + '&t=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  hackernews: {
    link: '//news.ycombinator.com/submitlink',
    classNames: 'fa fa-hacker-news',
    name: 'hackernews',
    sharePath: function (url, text) {
      return ('//news.ycombinator.com/submitlink?u=' + url + '&t=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    }
  },
  mail: {
    link: 'mailto:',
    classNames: 'fa fa-send',
    name: 'mail',
    sharePath: function (url, text) {
      return('mailto:?subject=' + text + '&body=' + useVia() + url);
    }
  },
  stumbledupon: {
    link: 'http://www.stumbleupon.com/hostedbadge.php?',
    classNames: 'fa fa-stumbledupon',
    name: 'stumbledupon',
    sharePath: function (url, text) {
      return ('http://www.stumbleupon.com/submit?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550')
    },
    measure: 'result.views',
    countAPI: 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url='
  },
  digg: {
    link: 'http://digg.com/submit?url=' + url + '&title=' + text + '&bodytext=' + text,
    className: 'fa fa-digg',
    name: 'digg',
    sharePath: function(url, text) {
      return ('http://digg.com/submit?',
        this.name,
        'toolbar=no,width=550,height=550');
    }
  }
};

socialOptions = _.keys(socialData);