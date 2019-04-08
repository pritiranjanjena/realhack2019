//var routerApp = angular.module('routerApp', ['ui.router']);


var app = angular.module('rpWealShare',
    [
        'ui.router', 'landing', 'search', 'dashboard', 'packages', 'personal'
    ]);
app.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/landing');

    $stateProvider

         .state('home', {
             url: '/home',
             templateUrl: 'app/home.html'
         })

    .state('landing', {
        url: '/landing',
        templateUrl: 'app/landing/landing.html',
        controller: 'landingCtrl'
    })

    .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'searchCtrl'
    })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .state('packages', {
        url: '/packages',
        templateUrl: 'app/packages/packages.html',
        controller: 'packagesCtrl'
    })
    .state('personal', {
        url: '/personal',
        templateUrl: 'app/personal/personal.html',
        controller: 'personalCtrl'
    })
});

app.controller('rpWealShareController', ['$rootScope', '$scope','$location','$state', function ($rootScope, $scope, $location,$state) {

    $scope.getState = function () {
        return $location.$$url;
    }

    $scope.gotoPage = function (page) {
        $state.go(page);
    }

    $scope.getRealthonImg = function () {
        if ($scope.getState() === '/landing') {
            return '../imgs/realthon_white.png';
        } else {
            return '../imgs/realthon.png';
        }
    }
    $rootScope.getObjByProperty = function (propertyName, propertyValue, arr) {

        if (!arr || arr.length === 0) {
            return null;
        }

        angular.forEach(arr, function (item, key) {
            if (item[propertyName] && item[propertyName] === propertyValue) {
                return item;
            }
        });
    };

    $rootScope.caluclatePercentage = function (userInput, selectedProperty) {

        if (selectedProperty) {
            var sftCanBuy = (userInput / selectedProperty.PricePerSqft);
            return sftCanBuy;
        }
    };

    $scope.loggedinUser = {};
    

    $rootScope.setloggedinUser = function (username) {
        $scope.loggedinUser.Name = username;
    }

    $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {

        window.scrollTo(0, 0);

    });
}]);

app.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            elem.bind('blur', function (event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
            });
        }
    };
}]);