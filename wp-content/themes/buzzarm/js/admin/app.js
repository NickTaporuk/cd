 var app = angular.module("App",[]);

 app.factory('tablesData',['$http',function($http){
     var link = "/wp-admin/admin-ajax.php",
         actionsNameDb          = "getNameDatabase",
         actionsNamesTables     = "getNameTables",
         actionsMetaDataTable   = "getMetaDataTable",
         actionsDataTable       = "getDataTable",
         actionsWp = {};
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
         },
         getDataTable:function(name,limit,callback){
             //console.log('getMetaDataTable::',name);
             actionsWp = {method:'GET', url:link,params:{"action":actionsDataTable,"table":name,"limit":limit}};
             return $http(actionsWp).success(callback);
         }
     }
 }]);

 app.controller('adminCtrl',['$scope','$http','tablesData',function($scope,$http,tablesData){
     $scope.nameTables      = '';
     $scope.nameDb          = '';
     $scope.headerData      = '';
     $scope.selectedTable   = '';
     $scope.dataTable       = '';
     $scope.tableLimit      = 50;

     tablesData.getNameDB(function(response) {
         $scope.nameDb = response.response;
     });

     tablesData.getNamesTables(function(response) {
         $scope.nameTables = response.response;
     });

     $scope.renderTable = function(){
         tablesData.getMetaDataTable($scope.selectedTable,function(response){
             console.log('getMetaDataTable::',response);
             //console.table(response);
             $scope.headerData = response.response;
         });

         tablesData.getDataTable($scope.selectedTable,$scope.tableLimit,function(response){
             console.log('getDataTable::',response);
             //console.table(response);
             $scope.dataTable = response.response;
         });
         //console.log('tableName::',$scope.selectedTable);
     };
 }]);

