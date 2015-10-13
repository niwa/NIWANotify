notify.directive('notifyMessages', [ function() {

    function link(scope, ele, attrs) {
        scope.getMessage();


    }

    return {
        restrict: 'EA',
        link: link,
        template: '<div  ng-if="notify_message" class="panel"><div class="panel-heading bg-{{notify_status}}"><span class="glyphicon glyphicon-wrench"> </span>{{notify_message}}</div></div>',
        controller: 'notifyController'
    }
}])