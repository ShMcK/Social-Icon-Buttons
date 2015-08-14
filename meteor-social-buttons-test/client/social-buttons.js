SOCIAL_BUTTONS.settings = {
  useCount: true,
  incrementing: true
};

Template.social_buttons.helpers({
  'socialButtons': function () {
    return SOCIAL_BUTTONS.buttons;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var socialTarget = event.currentTarget.id;
    event.preventDefault();
    SOCIAL_BUTTONS.open(socialTarget);
  }
});