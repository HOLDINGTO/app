angular.module('app')
       .config(['$ionicConfigProvider', function($ionicConfigProvider){
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.position('bottom');
       }])