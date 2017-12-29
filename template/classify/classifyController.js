angular.module('app')
       .controller('classifyController', ['$scope', function($scope){
              $scope.sildeData = [
                   {
                     text:'实惠好货',
                     state:'active'
                    },
                   {
                     text:'为你推荐',
                     state:''
                    },
                   {
                     text:'猜你喜欢',
                     state:''
                    },
                   {
                     text:'簇绒脚垫',
                     state:''
                    },
                   {
                     text:'羊绒脚垫',
                     state:''
                    },
                   {
                     text:'热压脚垫',
                     state:''
                    },
                   {
                     text:'皮革脚垫',
                     state:''
                    },
                   {
                     text:'电动脚垫',
                     state:''
                    },
                   {
                     text:'拼接脚垫',
                     state:''
                    },
                   {
                     text:'环保XPE',
                     state:''
                    }

              ];
       	$scope.goodsData = [
                     {
                     	imgUrl:'../../images/classification_picture3@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/classification_picture4@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/classification_picture6@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/classification_picture6@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/home_Module3_picture6@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/classification_picture6@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/productdetails_banner2@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     },

                     {
                     	imgUrl:'../../images/productdetails_banner3@2x.png',
                     	text:'雷丁电动汽车脚垫',
                     	new_price:'￥399',
                     	old_price:'￥599',
                     	freight:'免运费',
                     	number:'668'
                     }
       	];

              $('#menu').click(function(){
                     $('#sildable').animate({left:0},300,  function(){
                            $('#menu').click(function(){
                                   var left = parseInt($('#sildable').css('left'));
                                   if(left == 0){   
                                        $('#sildable').animate({left:'-152px'});
                                        return;  
                                   }
                            })

                     })
              });

              $('#sildable>div').click(function(){
                     alert('l')
                    $(this).addClass('active').subling().removeClass('avtive'); 
              })

       }])