notify.directive('notifyMessages', [ function() {

    function link(scope, ele, attrs) {
        scope.getMessage();


    }



    return {
        restrict: 'EA',
        link: link,
        template: '<div class="panel"><div class="panel-heading bg-warning"><span class="glyphicon glyphicon-wrench"> </span>{{notify_message}}</div></div>',
        controller: 'notifyController'
    }
}])