import angular from 'angular';
import angularRoute from 'angular-route';
import masteries from 'angular-lol-masteries';
import masteriesTemplate from './masteries.tpl.html';

angular.module('angular-lol-showcase', [
    'ng',
    angularRoute,
    masteries.name
]).config(($routeProvider) => {
    $routeProvider.otherwise({redirectTo:'/masteries'});

    $routeProvider.when('/masteries', {
        template:masteriesTemplate,
        controller:function(masteriesData){

        }
    });
});
