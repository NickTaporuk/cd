 var app = angular.module("App",[]);


 app.controller('adminCtrl',['$scope',function($scope){
     $scope.name = "Nick Taporuk";

     $scope.user = {
         name:'Nick',
         surname:'Taporuk',
         company:'ITFTC'
     };

     $scope.jonh = {
         name:'Jonh',
         surname:'Dauhn',
         company:'Genesis'
     };
 }]);