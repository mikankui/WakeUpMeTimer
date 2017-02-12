var exec = require('cordova/exec');

exports.setTimer = function(countDownTime, success, error) {
    console.log("called setTimer");
    exec(success, error, "WakeUpMeTimer", "setTimer", [countDownTime]);
};
