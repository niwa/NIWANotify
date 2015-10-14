notify
    .service('notifyService', ['$http', '$q', function ($http, $q) {
        return {
            getMessage: function () {

                var deferred = $q.defer();
                $http.get('/notifyProxy.php').then(function (response) {

                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(response.data);
                    }
                    appMessageContainer = xmlDoc.getElementsByTagName("app_message");
                    var status = '';
                    var appstatus = appMessageContainer[0].getAttribute('status');
                    switch (appstatus) {

                        case 'ok':
                            status = 'ok';
                            break;
                        case 'message':
                            status = 'info';
                            break;
                        case 'maintenance':
                            status = 'warning';
                            break;
                        case 'application_error':
                            status = 'danger';
                            break;
                        default:
                            status = appstatus;
                            break;
                    }
                    var appMessage = '';
                    if (status != "ok") {
                        appMessage = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;
                    }
                    appMsg =
                    {
                        msg: appMessage,
                        status: status
                    };
                    deferred.resolve(appMsg);
                });
                return deferred.promise;

            }
        }
    }])