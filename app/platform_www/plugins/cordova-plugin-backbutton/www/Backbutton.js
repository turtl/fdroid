cordova.define("cordova-plugin-backbutton.Backbutton", function(require, exports, module) {
var Backbutton = {

    goHome: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'BackbuttonPlugin',
            'goHome', []);
    },
    goBack: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'BackbuttonPlugin',
            'goBack', []);
    }
};

module.exports = Backbutton;
});
