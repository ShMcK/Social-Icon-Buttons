function isSquare () {
  if (SocialButtons.settings.square) {
    return '-square';
  }
}

socialData = {
  facebook: {
    link: '//www.facebook.com/sharer/sharer.php',
    classNames: 'fa fa-facebook' + isSquare(),
    name: 'facebook',
    sharePath: function (url, text) {
      window.open('//www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + useVia() + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    },
    measure: 'shares',
    countAPI: 'http://graph.facebook.com/?id='
  },
  google: {
    link: '//clients6.google.com/rpc?key=', // requires an API_KEY
    classNames: 'fa fa-google-plus' + isSquare(),
    width: 300,
    height: 600,
    name: 'google',
    sharePath: function (url, text) {
      window.open('//plus.google.com/share?url=' + url + '?text=' + useVia() + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300, width=600'
      );
    }
  },
  twitter: {
    link: '//twitter.com/share',
    classNames: 'fa fa-twitter' + isSquare(),
    name: 'twitter',
    sharePath: function (url, text) {
      window.open('//twitter.com/share?url=' + url + '&text=' + useVia() + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=255, width=550');
    },
    measure: 'count',
    countAPI: 'http://cdn.api.twitter.com/1/urls/count.json?url='
  },
  pinterest: {
    link: '//pinterest.com/pin/create/button/',
    classNames: 'fa fa-pinterest' + isSquare(),
    name: 'pinterest',
    sharePath: function (url, text) {
      window.open('//pinterest.com/pin/create/button/?url=' + url + '&description=' + useVia() + text,
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
      window.open('//delicious.com/save?v=5&&noui&jump=close&url=' + url + '&title=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  tumblr: {
    link: 'http://www.tumblr.com/share',
    classNames: 'fa fa-tumblr' + isSquare(),
    name: 'tumblr',
    sharePath: function (url, text) {
      window.open('http://www.tumblr.com/share?v=3&u=' + url + '&t=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  pocket: {
    link: 'https://getpocket.com/save',
    classNames: 'fa fa-get-pocket',
    name: 'pocket',
    sharePath: function (url, text) {
      window.open('https://getpocket.com/save?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  reddit: {
    link: 'http://www.reddit.com/submit',
    classNames: 'fa fa-reddit' + isSquare(),
    name: 'reddit',
    sharePath: function (url, text) {
      window.open('http://www.reddit.com/submit?url=' + url + '&title=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  linkedin: {
    link: 'http://www.linkedin.com/shareArticle',
    classNames: 'fa fa-linkedin' + isSquare(),
    name: 'linkedin',
    sharePath: function (url, text) {
      window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + useVia() + text,
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
      window.open('http://wordpress.com/press-this.php?u=' + url + '&t=' + useVia() + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  hackernews: {
    link: '//news.ycombinator.com/submitlink',
    classNames: 'fa fa-hacker-news',
    name: 'hackernews',
    sharePath: function (url, text) {
      window.open('//news.ycombinator.com/submitlink?u=' + url + '&t=' + text,
        this.name,
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    }
  },
  mail: {
    link: 'mailto:',
    classNames: 'fa fa-send',
    name: 'mail',
    sharePath: function (url, text) {
      window.open('mailto:?subject=' + text + '&body=' + useVia() + url);
    }
  },
  stumbleupon: {
    link: 'http://www.stumbleupon.com/hostedbadge.php?',
    classNames: 'fa fa-stumbleupon',
    name: 'stumbleupon',
    sharePath: function (url, text) {
      window.open('http://www.stumbleupon.com/submit?url=' + url + '&title=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    },
    measure: 'result.views',
    countAPI: 'http://www.stumbleupon.com/services/1.01/badge.getinfo?url='
  },
  digg: {
    link: 'http://digg.com/submit?',
    classNames: 'fa fa-digg',
    name: 'digg',
    sharePath: function (url, text) {
      window.open('http://digg.com/submit?url=' + url + '&title=' + text + '&bodytext=' + text,
        this.name,
        'toolbar=no,width=550,height=550');
    }
  },
  renren: {
    link: 'http://share.renren.com/share/buttonshare.do',
    classNames: 'fa fa-renren',
    name: 'renren',
    sharePath: function (url, text) {
      window.open('http://share.renren.com/share/buttonshare.do?link=' + url + 'title=' + text,
        this.name,
        'toolbar=no,width=550,height=550')
    }
  },
  weibo: {
    link: 'http://service.weibo.com/share/share.php?',
    classNames: 'fa fa-weibo',
    name: 'weibo',
    sharePath: function(url, text) {
      window.open('http://service.weibo.com/share/share.php?url=' + url + '&title=' + text + '&pic=&ralateUid=',
      this.name,
      'toolbar=no,width=550,height=550');
    }
  }
};

socialOptions = _.keys(socialData);