var socialButtonData = [{
  link: '//www.facebook.com/sharer/sharer.php?u={{url}}&t={{title}}',
  classNames: 'fa fa-facebook',
  width: 300,
  height: 600,
  name: 'facebook'
}, {
  link: '//plus.google.com/share?url={{url}}',
  classNames: 'fa fa-google-plus',
  width: 300,
  height: 600,
  name: 'google'
}, {
  link: '//twitter.com/share?text={{title}}',
  classNames: 'fa fa-twitter',
  width: 550,
  height: 235,
  name: 'twitter'
}];

Template.social_buttons.helpers({
  'socialButtons': function () {
    return socialButtonData;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var target = event.currentTarget.id;
    event.preventDefault();

  }
});