angular.module('main.controller', ['ionic', 'ngCordova'])

.controller('MainController', function($scope, $log, $cordovaBarcodeScanner) {

  /**
   * Start scanning a QR Code
   */
  $scope.startScanning = function(){
    $log.info("Start scanning");
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      $scope.openURL("http://www.google.fr")
    }, function(error) {
      $log.info("An error happened -> " + error);
    });
  };

  $scope.openURL = function(url){
    if (url.indexOf('http://') !== -1) {
      window.open(url, '_system');
      alert(url);
    }else{
      alert("invalid URL");
    }
  }

});



