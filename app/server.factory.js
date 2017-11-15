(function(){
  'use strict';
  angular.module("app")
  .factory("serverService",['$http',serverService]);

    function serverService($http){

      var serverService = {
        getTasks : getTasks,
        addTask : addTask
      };

      return serverService;

      function getTasks(){
        var promise = $http.get("http://localhost:3000/task").then(function (response) {
          return response.data.result;
        });
        return promise;
      };

      function addTask(task){
        var promise = $http.post("http://localhost:3000/task/create", task).then(function (response) {
          return response.data.result;
        });
        return promise;
      };

    }

})();
