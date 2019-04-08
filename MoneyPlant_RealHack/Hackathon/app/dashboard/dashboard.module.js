angular.module('dashboard', [])
.controller('dashboardCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {


    $scope.loggedinUser = userlist[0];

    $scope.formName = "";

    $rootScope.setloggedinUser($scope.loggedinUser.User.Name);

    $scope.updateview = function (vw) {

        $scope.user = vw;
    };

    $scope.getTotalSft = function () {

        //var invests = $scope.loggedinUser.User.Property;
        //var total = 0;
        //for (var i = 0; i < invests.length; i++) {
        //    var prop = invests[i];
        //    total += parseInt(prop.Sqft);
        //}
        //return total;

        if (!$scope.user)
            return "40,000";
        else
            return "5,000";
    }

    $scope.getTotalProp = function () {      

        if (!$scope.user)
            return "60";
        else
            return "2";
    }

    $scope.getTotalAmt = function () {

        if (!$scope.user) {
            var invests = $scope.loggedinUser.User.Property;
            var total = 0;
            for (var i = 0; i < invests.length; i++) {
                var prop = invests[i];
                total += parseInt(prop.Investment);
            }
            return total;
        } else {
            return 50000;
        }
    }

    $scope.getInvSHare = function () {

        if (!$scope.user)
            return $scope.loggedinUser.User.Investor;
        else
            return "3.25 %";
    }

    $scope.getInvVal = function () {

        if (!$scope.user)
            return $scope.loggedinUser.User.InvestorsValue;
        else
            return "10,000";
    }
   

    var loadgraph = function () {

        Highcharts.chart('graphcontainer', {
            title: {
                text: 'Properties Data for UDR'
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                Name:'Udr'
            }]
        });

    };

    var loadDOnut = function () {

        Highcharts.chart('donutcontainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Property<br>shares<br>2017',
                align: 'center',
                verticalAlign: 'middle',
                y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Huntington Vista', 58.9],
                    ['Harbor at Mesa Verde', 13.29],
                    ['Arbors at Lee Vista', 13],
                    ['Crown Pointe', 3.78],
                    ['Cambridge Court Apartment Homes', 3.42],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });


    };

    var loadPie = function () {

        Highcharts.chart('piecontainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Property market shares in January, 2018'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Huntington Vista',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Harbor at Mesa Verde',
                    y: 11.84
                }, {
                    name: 'Arbors at Lee Vista',
                    y: 10.85
                }, {
                    name: 'Crown Pointe',
                    y: 4.67
                }, {
                    name: 'Cambridge Court Apartment Homes',
                    y: 4.18
                }, {
                    name: 'Dominion Middle Ridge',
                    y: 1.64
                }, {
                    name: 'Dominion Lake Ridge',
                    y: 1.6
                }, {
                    name: 'Wellington Place at Olde Town',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });

    };


    var loadalPMCs = function () {

        Highcharts.chart('allpmcs', {
            title: {
                text: 'PMCs from the year of 2015 - 2019'
            },
            xAxis: {
                categories: ['2015', '2016', '2017', '2018', '2019']
            },
            labels: {
                items: [{
                    html: 'Total Investments',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: [
                {
                type: 'column',
                name: 'Huntington Vista',
                data: [300, 800, 650, 700, 398]
            }, {
                type: 'column',
                name: 'Harbor at Mesa Verde',
                data: [250, 750, 222, 804, 398]
            }, {
                type: 'column',
                name: 'Arbors at Lee Vista',
                data: [650, 521, 786, 1025, 555]
            }, {
                type: 'spline',
                name: 'Average',
                data: [150, 666, 650, 365, 398],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total Investments',
                data: [{
                    name: 'Amly',
                    y: 2848,
                    color: Highcharts.getOptions().colors[0] // Jane's color
                }, {
                    name: 'Camden',
                    y: 2424,
                    color: Highcharts.getOptions().colors[1] // John's color
                }, {
                    name: 'Promethus',
                    y: 3537,
                    color: Highcharts.getOptions().colors[2] // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });


    };
   

    $scope.loadCharts = function () {
        loadalPMCs();
        loadgraph();
        loadPie();
        loadDOnut();
    };

    $scope.loadCharts();

    $scope.loadForm = function (formname)
    {
        $scope.formName = formname;

        if (formname === 'overview')
            $scope.loadCharts();
    };




    

}]);


