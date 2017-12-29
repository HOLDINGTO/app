angular.module('app')
       .controller("userController", ["$scope", function($scope){

       	$scope.orderData = [
           {
           	imgUrl:"../../images/icons/I'm_icons1@2x.png",
           	status:'待付款'
           },
           {
           	imgUrl:"../../images/icons/I'm_icons4@2x.png",
           	status:'待发货'
           },
           {
           	imgUrl:"../../images/icons/I'm_icons5@2x.png",
           	status:'待收货'
           },
           {
           	imgUrl:"../../images/icons/I'm_icons2@2x.png",
           	status:'待评价'
           },
           {
           	imgUrl:"../../images/icons/I'm_icons3@2x.png",
           	status:'退款'
           }
       	]
       }])