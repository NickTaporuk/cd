 var app = angular.module("App",[]);

 app.factory('tablesData',['$http',function($http){
     var link = "/wp-admin/admin-ajax.php",
         actionsNameDb = "getNameDatabase",
         actionsNamesTables = "getNameTables",
         actionsMetaDataTable = "getMetaDataTable",
         actionsWp = {method:'GET', url:link,params:{"action":''}};
     return {
         getNameDB:function(callback){
             //actionsWp.params.action = actionsNameDb;
             actionsWp = {method:'GET', url:link,params:{"action":actionsNameDb}};
             return $http(actionsWp).success(callback);
         },
         getNamesTables:function(callback){
             actionsWp = {method:'GET', url:link,params:{"action":actionsNamesTables}};
             //actionsWp.params.action = actionsNamesTables;
             return $http(actionsWp).success(callback);
         },
         getMetaDataTable:function(name,callback){
             //console.log('getMetaDataTable::',name);
             actionsWp = {method:'GET', url:link,params:{"action":actionsMetaDataTable,"table":name}};
             return $http(actionsWp).success(callback);
         }
     }
 }]);

 app.controller('adminCtrl',['$scope','$http','tablesData',function($scope,$http,tablesData){
     $scope.nameTables  = '';
     $scope.nameDb = '';
     $scope.headerData = '';

     tablesData.getNameDB(function(response) {
         $scope.nameDb = response.response;
         //$scope.nameDb = response.data.response;
         //console.log('response::',$scope.nameDb);
     });

     tablesData.getNamesTables(function(response) {
         $scope.nameTables = response.response;
         //$scope.nameDb = response.data.response;
         //console.log('response nameTables::',$scope.nameTables);
     });

     $scope.selectedTable = '';
     //console.log('$scope.nameDb::',$scope.nameDb);
     //console.log('tablesData.getNameDB()::',tablesData.getNameDB());

     $scope.renderTable = function(){
         tablesData.getMetaDataTable($scope.selectedTable,function(response){
             console.log('getMetaDataTable::',response);
             //console.table(response);
         });
         //console.log('tableName::',$scope.selectedTable);
     };
 }]);

