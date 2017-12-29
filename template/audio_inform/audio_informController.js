angular.module('app')
        .controller('audioController', ['$scope', function($scope){

        	$scope.appData = [
                 '新消息提醒',
                 '铃声提醒',
                 '振动提醒'
        	];
        	$scope.appsData = [
                 '应用内横幅提醒',
                 '应用内铃声提醒',
                 '应用内振动提醒'
        	]
        }])