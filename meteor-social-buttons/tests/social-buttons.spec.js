Tinytest.waitFor = function (timeout, interval, onComplete, msg, waitForFunc) {
  var startTime, intervalHandler;
  startTime = new Date().getTime();

  if (waitForFunc() === true) {
    onComplete();
    return;
  }

  intervalHandler = Meteor.setInterval((function () {
    try {
      var currentTime;
      if (waitForFunc() === true) {
        console.log("waitFor setInterval cb: condition is true");
        Meteor.clearTimeout(intervalHandler);
        onComplete();
      }

      currentTime = new Date().getTime();
      if (currentTime - startTime >= timeout) {
        console.log("waitFor setInterval cb: condition timeout");

        Meteor.clearTimeout(intervalHandler);
        test.fail({type: "timeout", message: msg});
        onComplete();
      }
    } catch (ex) {
      test.exception(ex);
      onComplete();
    }
  }), interval);
};

Tinytest.add('Social Buttons defaults', function () {
  test.equal(Template.social_buttons.SocialButtons.length === 3);
});

//Tinytest.add('Configuration working', function () {
//  SocialButtons.config({
//    twitter: false,
//    google: false
//  });
//  test.equal(Template.social_button.SocialButtons.length === 1);
//});