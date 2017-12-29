angular.module('app')
       .controller('set_serController', ['$scope', function($scope){
       	
       	$scope.textData = [
           {
           	text:'我要反馈'
           },
           {
           	text:'找回密码'
           },
           {
           	text:'手机'
           },
           {
           	text:'要求退款'
           },
           {
           	text:'福利社'
           },
           {
           	text:'退款去向'
           },
           {
           	text:'催发货'
           },
           {
           	text:'批好货'
           }
       	]

       }])