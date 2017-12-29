angular.module('app')
       .controller('homeController', ['$scope', function($scope){
                  
               $scope.slide = {
                   doesContinue:true,
                   autoPlay:true,
                   slideInteval:2000,
       
               };
       
              $scope.bannerData = [
                {imgUrl:'../../images/home_banner1@2x.png'},
                {imgUrl:'../../images/home_banner2@2x.png'},
                {imgUrl:'../../images/home_banner3@2x.png'}
                
              ];
               
             $scope.classifyData = [
                  {
                      imgUrl:'../../images/icons/home_column_icons1@2x.png',
                      intro:'簇绒脚垫'
                  },
                  {
                      imgUrl:'../../images/icons/home_column_icons2@2x.png',
                      intro:'羊绒脚垫'
                  },
                  {
                      imgUrl:'../../images/icons/home_column_icons3@2x.png',
                      intro:'热压脚垫'
                  },
                  {
                      imgUrl:'../../images/icons/home_column_icons4@2x.png',
                      intro:'更多产品'
                  }
             ];

             $scope.goodsData = [
                  { 
                    imgUrl:'../../images/home_Module1_picture3@2x.png',
                    text:'韩国丝汽车脚垫韩国丝汽车脚垫韩国丝汽车脚垫韩国丝汽车脚垫韩国丝汽车脚垫韩国丝汽车脚垫',
                    coin:'￥',
                    price:'299',
                    cost:'799',
                    estimate:'好评率',
                    probablity:'99%'
                  },
                  { 
                    imgUrl:'../../images/home_Module1_picture4@2x.png',
                    text:'雷丁电动汽车脚垫雷丁电动汽车脚垫',
                    coin:'￥',
                    price:'558',
                    cost:'699',
                    estimate:'好评率',
                    probablity:'99%'
                  },
                  { 
                    imgUrl:'../../images/home_Module1_picture1@2x.png',
                    text:'羊绒毯汽车脚垫12',
                    coin:'￥',
                    price:'199',
                    cost:'599',
                    estimate:'好评率',
                    probablity:'99%'
                  },
                  { 
                    imgUrl:'../../images/home_Module1_picture2@2x.png',
                    text:'菱形灰色绗绣磨砂皮革汽车脚垫',
                    coin:'￥',
                    price:'399',
                    cost:'499',
                    estimate:'好评率',
                    probablity:'99%'
                  }
                 
             ]
           
           $scope.likeData = [
                  {
                    imgUrl:'../../images/home_Module3_picture1@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  },
                  {
                    imgUrl:'../../images/home_Module3_picture5@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  },
                  {
                    imgUrl:'../../images/home_Module3_picture6@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  },
                  {
                    imgUrl:'../../images/productdetails_banner2@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  },
                  {
                    imgUrl:'../../images/productdetails_banner3@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  },
                  {
                    imgUrl:'../../images/productdetails_banner4@2x.png',
                    text:'御捷电动汽车脚垫7',
                    price:'￥1203',
                    number:'12345'
                  }
           ]
           }])