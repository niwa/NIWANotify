describe ('Controller: notifyController', function () {
    var scope, notifyService;

    beforeEach(function () {
        var mockResponse ={};
        module('notify',function ($provide){
            $provide.value('notifyService',mockResponse);
        })

        inject(function($q) {
            var appMsg =
            {
                msg:'This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM',
                status: 'maintenance'
            }

            mockResponse.getMessage = function () {
                var defer = $q.defer();
                defer.resolve(appMsg);
                return defer.promise;
            }

        })


    })

    beforeEach(inject(function($controller, $rootScope,_notifyService_){
        scope         = $rootScope.$new();
        notifyService = _notifyService_;
        controller    = $controller('notifyController',{$scope: scope, notifyService: notifyService });
        scope.getMessage();
        scope.$digest();
    }));

    it('shopuld set the correct values into the scope', function() {
        expect(scope.notify_message).toEqual('This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM');
        expect(scope.notify_status).toEqual('maintenance');
    })




})