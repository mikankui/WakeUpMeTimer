var exec = require('cordova/exec');

exports.setTimer = function(countDownTime, success, error) {
    exec(success, error, "WakeUpMeTimer", "setTimer", [countDownTime]);
};
