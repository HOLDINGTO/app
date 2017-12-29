angular.module('app')
       .controller('pro_detaController', ['$scope', function($scope){
       	  
       	  $scope.slide = {
                   doesContinue:true,
                   autoPlay:true,
                   slideInteval:2000,
       
               };
       
              $scope.bannerData = [
                {imgUrl:'../../images/productdetails_banner1@2x.png'},
                {imgUrl:'../../images/productdetails_banner2@2x.png'},
                {imgUrl:'../../images/productdetails_banner3@2x.png'},
                {imgUrl:'../../images/productdetails_banner4@2x.png'}
                
              ];
              $scope.estiData = [
                   {
                   	title:'车型专用正面',
                   	num:'(12)'
                   },
                   {
                   	title:'服务好',
                   	num:'(6)'
                   },
                   {
                   	title:'物流快',
                   	num:'(3)'
                   },
                   {
                   	title:'质量好',
                   	num:'(8)'
                   },
                   {
                   	title:'不划算',
                   	num:'(12)'
                   }
              ];

              $scope.details_tData = [
                   {
                    label:'品牌',
                    intro:'御捷电动汽车脚垫3'
                   },
                   {
                    label:'型号',
                    intro:'666359'
                   },
                   {
                    label:'图案',
                    intro:'纯色'
                   },
                   {
                    label:'款式',
                    intro:'全包围式'
                   },
                    {
                    label:'表层材质',
                    intro:'皮革'
                   },
                    {
                    label:'脚垫款型',
                    intro:'皮革脚垫'
                   },
                    {
                    label:'组合形式',
                    intro:'五座专用'
                   },
                    {
                    label:'成分含量',
                    intro:'71%(含)-80%(含)'
                   },
                    {
                    label:'颜色分类',
                    intro:'棕色 灰色 米色 咖啡色 黑色'
                   }

              ]
       }])