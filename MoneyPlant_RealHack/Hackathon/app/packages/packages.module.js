




angular.module('packages', [])
    .controller('packagesCtrl', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

        $scope.PackagePropertyList = seededData.PackagePropertyList;

        $scope.defaultMin = 500;
        $scope.maxinput = 10000;

        $scope.selectedProperty = {};
        $scope.selectedProperty.Sqft = 1000;
        $scope.selectedProperty.PricePerSqft = 110;
        $scope.selectedProperty.sftCanBuy = 2500;
        $scope.selectedProperty.sftCanBuy = 2500;

        $scope.moveToRegister = function () {
            $('#applyModal').modal('hide');
            $timeout(function () {
                $scope.$parent.gotoPage('personal');
            }, 500);
        }

        $scope.updateSft = function (input) {
            debugger;
           
            $scope.sftCanBuy = $rootScope.caluclatePercentage(input, $scope.selectedProperty);
        };



    }]);



