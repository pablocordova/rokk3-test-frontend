(function(){
  'use strict';

  angular.module("app")
  .controller("controlController",['serverService',controlController]);

    function controlController(serverService){

      var vm = this;

      vm.tasks = [];

      vm.task = {
        name: '',
        dueDate: null,
        priority: 1
      }

      vm.toogleDueDate = false;
      vm.toogleName = false;
      vm.tooglePriority = false;

      putInitialData();

      vm.orderByDueDate = function(state){
        vm.toogleDueDate = state;
        vm.tasks = state ? 
          _.orderBy(vm.tasks, 'dueDate', 'asc') :
          _.orderBy(vm.tasks, 'dueDate', 'desc')
      }

      vm.orderByName = function(state){
        vm.toogleName = state;
        vm.tasks = state ? 
          _.orderBy(vm.tasks, 'name', 'asc') :
          _.orderBy(vm.tasks, 'name', 'desc')
      }

      vm.orderByPriority = function(state){
        vm.tooglePriority = state;
        vm.tasks = state ? 
          _.orderBy(vm.tasks, 'priority', 'asc') :
          _.orderBy(vm.tasks, 'priority', 'desc')
      }

      vm.getClaseRow = function(date){
        let currentDate = new Date();
        let dataDate = new Date(date);
        return currentDate > dataDate ? 'red-color' : '';
      }
          
      vm.addTask = function(){
        serverService.addTask(vm.task).then(function(result){
          putInitialData();
        });
      }

      function putInitialData(){
        serverService.getTasks().then(function(data){
          vm.tasks = data;
        });
      };

    }

})();

