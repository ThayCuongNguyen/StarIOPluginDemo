angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $window) {

  $scope.printers = [];


  $scope.checkStatus = function () {

    if ($window.plugins.starPrinter) {

      $window.plugins.starPrinter.checkStatus($scope.printers[0].name, function (error, result) {
        if (error) {
          alert("Error : "+error);
          console.log(error);
        } else {
          alert(result.offline? 'Printer offline' : 'Printer online');
        }
      });

    } else {
      console.log('-> Printer plugin not available');
    }
  }


  $scope.printReceipt = function () {

    if ($window.plugins.starPrinter) {

      $window.plugins.starPrinter.printReceipt($scope.printers[0].name, "Test\n Test \n\n\n Hello", function (error, result) {
        if (error) {
          alert(error);
          console.log(error);
        } else {

        }
      });

    } else {
      console.log('-> Printer plugin not available');
    }
  };


  $scope.portDiscovery = function () {
    if ($window.plugins.starPrinter) {
      $window.plugins.starPrinter.portDiscovery(function (error, result) {
          if (error) {
            alert("Discovery error" + error);
          } else {
            alert(result.length + " printers found");
            $scope.printers = result;
          }
      });
     } else {
        console.log('-> Printer plugin not available');
      }


  }



});
