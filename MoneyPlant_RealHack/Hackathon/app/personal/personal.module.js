




angular.module('personal', [])
    .controller('personalCtrl', ['$rootScope', '$scope', '$interval', '$state', '$timeout', function ($rootScope, $scope, $interval, $state, $timeout) {

        $scope.openPayments = function () {
            $scope.progressValue = 0;

        }
        $scope.progressValue = 0;
        var stop;
        $scope.openPayment = function () {
            // Don't start a new fight if we are already fighting
            if (angular.isDefined(stop)) return;

            stop = $interval(function () {
                if ($scope.progressValue < 100) {
                    $scope.progressValue = $scope.progressValue + 3;
                } else {
                    $scope.stopFight();
                    $('#payModal').modal('hide');
                    $timeout(function () {
                        $scope.$parent.gotoPage('dashboard');
                    }, 500);
                }
            }, 100);
        };
        $scope.stopFight = function () {
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        };

    }]);


