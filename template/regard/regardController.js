angular.module('app')
       .controller('regardController', ['$scope',function($scope){
          
          $scope.regardText = [
                {
                	text:'新版本检测',
                },
                {
                	text:'版权信息',
                },
                {
                	text:'软件许可使用协议',
                },
                {
                	text:'平台服务协议',
                },
                {
                	text:'隐私权政策',
                },
                {
                	text:'帮助中心',
                }

          ]
       }])