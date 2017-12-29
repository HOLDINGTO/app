

angular.module('app')
       .controller('orderReceController', ['$scope', function($scope){

       	$scope.navData = [
             {
                text:'待付款',
                cla:''
             },

             {
              text:'待发货',
              cla:''
             },

             {
                text:'待收货',
                cla:'active'
             },

             { 
              text:'待评价',
              cla:''
             },

             {
              text:'退款',
              cla:''
             }
       	];

        $scope.orderData = [
              {
                status:'正在发货中',
                imgUrl:'../../images/classification_picture1@2x.png',
                name:'韩国丝拼接汽车脚垫',
                color:'紫色',
                freight:'免运费',
                price:'￥199.00',
                o_price:'￥399.00',
                num:'1',
              },

              {
                status:'等待发货',
                imgUrl:'../../images/classification_picture5@2x.png',
                name:'热压汽车脚垫',
                color:'黑色',
                freight:'免运费',
                price:'￥231.00',
                o_price:'￥654.00',
                num:'3',
              },

              {
                status:'正在发货中',
                imgUrl:'../../images/classification_picture2@2x.png',
                name:'韩国丝汽车脚垫',
                color:'棕色',
                freight:'免运费',
                price:'￥345.00',
                o_price:'￥599.00',
                num:'2',
              }
            
        ]
       }])