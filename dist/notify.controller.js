notify.controller('notifyController',['$scope','notifyService', function($scope,notifyService) {

    $scope.notify_message = false;

    $scope.getMessage = function () {
         notifyService.getMessage().then (function(msg) {
             $scope.notify_message = msg.msg;
             $scope.notify_status  = msg.status
         });
    }
}])