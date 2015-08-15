SocialButtons.config({
  useCount: true,
  incrementing: true,
  facebook: true,
  twitter: true
});

Template.social_buttons.helpers({
  'socialButtons': function () {
    return SocialButtons.get();
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var socialTarget = event.currentTarget.id;
    event.preventDefault();
    SocialButtons.open(socialTarget);
  }
});