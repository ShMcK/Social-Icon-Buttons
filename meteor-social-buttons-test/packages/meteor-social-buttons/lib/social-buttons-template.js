Template.social_buttons.helpers({
  'socialButtons': function () {
    return SocialButtons.buttons;
  },
  'useCount': function (hasMeasure) {
    return hasMeasure && SocialButtons.settings.useCount;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var socialTarget = event.currentTarget.id;
    event.preventDefault();
    SocialButtons.open(socialTarget);
  }
});