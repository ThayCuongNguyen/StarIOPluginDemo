angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.checkStatus = function(){

      if(window.cordova.plugins.printer){
        console.log('############## Printer plugin available');
        window.cordova.plugins.printer.CheckStatus(1,function(success){
          console.log('Success message',success);
        },function(err){
          console.log('error message',err);
        });
      }else {
        console.log('****************** Printer plugin not available',window.cordova.plugins);
      }

    };

    $scope.printHelloworld = function(){
      if(window.cordova.plugins.printer){
        console.log('############## Printer plugin available');
        window.cordova.plugins.printer.PrintHello(1,function(success){
          console.log('Success message',success);
        },function(err){
          console.log('error message',err);
        });
      }else {
        console.log('****************** Printer plugin not available',window.cordova.plugins);
      }
    }

  });

