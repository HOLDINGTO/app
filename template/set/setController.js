angular.module('app')
       .controller('setController',['$scope', function($scope){
       	$scope.listText = [
           '账号与安全',
           '音效与通知',
           '隐私',
           '通用',
           '客服',
       	]
       }])