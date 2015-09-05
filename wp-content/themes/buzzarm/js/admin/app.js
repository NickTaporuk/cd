 var app = angular.module("App",[]);

 app.factory('tablesData',['$http',function($http){
     var link = "/wp-admin/admin-ajax.php",
         actionsNameDb = "getNameDatabase",
         actionsNamesTables = "getNameTables",
         actionsWp = {method:'GET', url:link,params:{"action":''}};
     return {
         getNameDB:function(callback){
             //actionsWp.params.action = actionsNameDb;
             actionsWp = {method:'GET', url:link,params:{"action":"getNameDatabase"}};
             return $http(actionsWp).success(callback);
         },
         getNamesTables:function(callback){
             actionsWp = {method:'GET', url:link,params:{"action":"getNameTables"}};
             //actionsWp.params.action = actionsNamesTables;
             return $http(actionsWp).success(callback);
         }
     }
 }]);

 app.controller('adminCtrl',['$scope','$http','tablesData',function($scope,$http,tablesData){
     $scope.nameTables  = '';
     $scope.nameDb = '';


     tablesData.getNameDB(function(response) {
         $scope.nameDb = response.response;
         //$scope.nameDb = response.data.response;
         console.log('response::',$scope.nameDb);
     });

     tablesData.getNamesTables(function(response) {
         $scope.nameTables = response.response;
         //$scope.nameDb = response.data.response;
         console.log('response nameTables::',$scope.nameTables);
     });

     console.log('$scope.nameDb::',$scope.nameDb);
     //console.log('tablesData.getNameDB()::',tablesData.getNameDB());

 }]);

