import angular from 'angular';
import angularRoute from 'angular-route';
import masteriesModule from 'angular-lol-masteries';
import masteriesViewTemplate from './masteriesViewTemplate.tpl.html';
angular.module('angular-lol-showcase', [
    'ng',
    angularRoute,
    masteriesModule.name
]).config(($routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/masteries'});

    $routeProvider.when('/masteries', {
        template: masteriesViewTemplate,
        controller: function ($scope, masteriesData) {
            $scope.summonerMasteries = {
                "4111":{
                    rank:2
                },
                "4112":{
                    rank:1
                }
            };
        }
    });
});
