Template.social_buttons.helpers({
  'socialButtons': function () {
    return SocialButtons.buttons;
  },
  'useCount': function (hasMeasure) {
    return hasMeasure && SocialButtons.settings.useCount;
  }
});

Template.social_buttons.events({
  'click .social-button': function (event, template) {
    var socialTarget = event.currentTarget.id;
    var url = template.data.url || document.url;
    var text = template.data.text || document.title;
    event.preventDefault();
    SocialButtons.open(socialTarget, url, text);
  }
});