import angular from 'angular';
import angularRoute from 'angular-route';
import masteriesModule from 'angular-lol-masteries';
import masteriesViewTemplate from './masteries.tpl.html';
angular.module('angular-lol-showcase', [
    'ng',
    angularRoute,
    masteriesModule.name
]).config(($routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/masteries'});

    $routeProvider.when('/masteries', {
        template: masteriesViewTemplate,
        controller: function (masteriesData) {

        }
    });
});
