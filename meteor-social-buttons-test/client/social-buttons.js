
Template.social_buttons.helpers({
  'socialButtons': function () {
    return SOCIAL_BUTTONS;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event) {
    var socialTarget = event.currentTarget.id;
    event.preventDefault();
    var socialData = SOCIAL_BUTTON_DATA[socialTarget];
    socialData.openWindow(encodeURI(document.URL), encodeURI(document.title));
  }
});