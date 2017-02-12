// featureのparamのvalueで指定したやつ
package WakeUpMeTimer;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class WakeUpMeTimer extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
        console.log("called setTimer");
        if (action.equals("setTimer")) {
            String name = data.getString(0);
            String message = "Hello, World !!! " + "Hello, " + name;
            callbackContext.success(message);
            return true;
        } else {
            return false;
        }
    }
}