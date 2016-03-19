angular.module('main.controller', ['ionic', 'ngCordova'])

.controller('MainController', function($scope, $log, $cordovaBarcodeScanner) {
  $scope.greeting = 'Hola!';

  $scope.startScanning = function(){
    
    $log.info("Start scanning")

    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      $log.info("Barcode Format -> " + imageData.format);
      $log.info("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      $log.info("An error happened -> " + error);
    });

  }

});



