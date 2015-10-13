describe('It should display the status message', function () {
    var $compile, $rootscope, $scope;

    beforeEach(module('notify', function ($provide,$controllerProvider) {
        $controllerProvider.register('notifyController',function ($scope) {
            $scope.getMessage = function () {

                $scope.notify_message = 'This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM';
                $scope.notify_status  ='status';
            }
        })
    }))

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
    }));


    it('Checks that the message is displayed corrently', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile("<notify-messages></notify-messages>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM');
        expect(element.html()).toContain('maintenance');

    })

})