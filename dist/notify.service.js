notify
    .service('notifyService', ['$http', '$q', function ($http, $q) {
        return {
            getMessage: function () {

                var deferred = $q.defer();
                $http.get('/notifyProxy.php').then(function (response) {

                    if (window.DOMParser)
                    {
                        parser=new DOMParser();
                        xmlDoc=parser.parseFromString(response.data,"text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async=false;
                        xmlDoc.loadXML(response.data);
                    }
                    appMessageContainer = xmlDoc.getElementsByTagName("app_message");
                    appMessage = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;
                    status = appMessageContainer[0].getAttribute('status');
                    appMsg =
                    {
                        msg:appMessage,
                        status: status
                    }
                    deferred.resolve(appMsg);
                })
                return deferred.promise;

            }
        }
    }])