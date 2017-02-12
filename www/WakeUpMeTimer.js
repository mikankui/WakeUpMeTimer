var setTimer = {
    set: function(countDownTime, success, error) {
    console.log("called setTimer");
    exec(success, error, "WakeUpMeTimer", "setTimer", [countDownTime]);
    }
};
module.exports = alarm;setTimer