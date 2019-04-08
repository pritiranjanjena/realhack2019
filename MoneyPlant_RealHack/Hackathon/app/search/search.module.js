




angular.module('search', [])
    .controller('searchCtrl', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

        $scope.test = 'test';

        //debugger;
        $scope.propertyTypes = seededData.PropertyTypes;
        $scope.propertyAreas = seededData.PropertyAreas;
        //$scope.propertyList = seededData.PropertyList;


        $scope.defaultMin = 100;
        $scope.selectedUserValue = 100;

        $scope.selectedPropertyTypes = [];

        //angular.foreach($scope.propertyTypes, function (val,index) {

        //    $scope.selectedPropertyTypes[index] = false;
        //});

        // $scope.selectedPropertyTypes = [$scope.propertyTypes.length];
        $scope.moveToRegister = function () {
            $('#applyModal').modal('hide');
            $timeout(function () {
                $scope.$parent.gotoPage('personal');
            }, 500);
        }
        $scope.getPropertiesList = function (inv) {

            var list = [];
            if (!inv) {
                list = seededData.PropertyList;
            }
            else {
                angular.forEach(seededData.PropertyList, function (obj, key) {
                    if (inv <= parseInt(obj.Property.Sqft)) {
                        list.push(obj);
                    }
                });
            }

            return list;
        };
        debugger;

        // $scope.propertyList = $scope.getPropertiesList($scope.selectedUserValue);

        $scope.applyFilter = function () {

            $scope.propertyList = $scope.getPropertiesList($scope.selectedUserValue);

        };

        $scope.applyFilter();


        $scope.selectProperty = function (property) {
            $scope.showRegistration = false;
            $scope.selectedProperty = property;
            $scope.maxinput = (property.Sqft * property.PricePerSqft);
            $scope.updateSft($scope.defaultMin);
        };

        $scope.sftCanBuy = "";

        $scope.updateSft = function (input) {
            debugger;
            $scope.sftCanBuy = "";
            if (!$scope.selectedProperty) {
                $scope.selectedUserValue = "";
                return;
            }

            
            $scope.sftCanBuy = $rootScope.caluclatePercentage(input, $scope.selectedProperty);
        };

        $scope.cancel = function () {
            $scope.selectedProperty = null;
            $scope.sftCanBuy = "";
            $scope.selectedUserValue = $scope.defaultMin;

        };





    }]);


