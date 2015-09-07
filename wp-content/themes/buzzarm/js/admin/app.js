 var app = angular.module("App",['ngDialog']);

 app.factory('tablesData',['$http',function($http){
     var link = "/wp-admin/admin-ajax.php",
         actionsNameDb          = "getNameDatabase",
         actionsNamesTables     = "getNameTables",
         actionsMetaDataTable   = "getMetaDataTable",
         actionsDataTable       = "getDataTable",
         actionsWp = {};
     return {
         getNameDB:function(callback){
             actionsWp = {method:'GET', url:link,params:{"action":actionsNameDb}};
             return $http(actionsWp).success(callback);
         },
         getNamesTables:function(callback){
             actionsWp = {method:'GET', url:link,params:{"action":actionsNamesTables}};
             return $http(actionsWp).success(callback);
         },
         getMetaDataTable:function(name,callback){
             actionsWp = {method:'GET', url:link,params:{"action":actionsMetaDataTable,"table":name}};
             return $http(actionsWp).success(callback);
         },
         getDataTable:function(name,limit,callback){
             actionsWp = {method:'GET', url:link,params:{"action":actionsDataTable,"table":name,"limit":limit}};
             return $http(actionsWp).success(callback);
         }
     }
 }]);

app.controller('adminCtrl',['$scope','$http','tablesData','ngDialog',function($scope,$http,tablesData,ngDialog){
    $scope.nameTables      = '';
    $scope.nameDb          = '';
    $scope.headerData      = '';
    $scope.selectedTable   = '';
    $scope.dataTable       = '';
    $scope.tableLimit      = 50;
    $scope.tableCount      = '';
    $scope.formData = {};

    //POPUP START
    $scope.clickToOpen = function () {
        ngDialog.open({
            template: 'templateId',
            scope:$scope
        });
    };
    //get form data from popup
    $scope.submit = function() {
        var formElements=document.getElementById("add-items-data");
        for (var i=0; i<formElements.length; i++){
            if (formElements[i].type!="submit") $scope.formData[formElements[i].name]=formElements[i].value;
        }

        //add validate form
        ngDialog.close();
        //console.debug($scope.formData);
    };

    $scope.closeSecond = function () {
        ngDialog.close();
    };
    //POPUP END
    tablesData.getNameDB(function(response) {
     $scope.nameDb = response.response;
    });

    tablesData.getNamesTables(function(response) {
     $scope.nameTables = response.response;
    });

    $scope.renderTable = function(){
     tablesData.getNamesTables(function(response) {
         $scope.nameTables = response.response;
     });

     tablesData.getMetaDataTable($scope.selectedTable,function(response){
         $scope.headerData = response.response;
     });

     tablesData.getDataTable($scope.selectedTable,$scope.tableLimit,function(response){
         $scope.dataTable = response.response;
     });
    };
 }]);