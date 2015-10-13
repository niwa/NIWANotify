notify.controller('notifyController',['$scope','notifyService', function($scope,notifyService) {
    $scope.getMessage = function () {
         $scope.notify_message = notifyService.getMessage();
    }
}])