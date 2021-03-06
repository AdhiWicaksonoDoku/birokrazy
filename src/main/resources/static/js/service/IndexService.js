/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
birokrazyApp.factory('IndexService',['$http', '$constant', function($http, $constant) {
    var promise;
    var indexService = {
        findAll: function() {
            if ( !promise ) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get($constant.apiVersion.public+'/highlight').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    //console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
            }
            // Return the promise to the controller
            return promise;
        }
    };
    return indexService;
}]);
