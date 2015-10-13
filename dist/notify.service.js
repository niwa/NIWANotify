notify
    .service('notifyService', ['$http', '$q', function ($http, $q) {
        return {
            getMessage: function () {

                var deferred = $q.defer();
                $http.get($url).then(function (response) {
                    deferred.resolve(response);
                })

                return deferred.promise;

            }
        }
    }])