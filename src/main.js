import angular from 'angular';
import angularRoute from 'angular-route';
import masteries from 'yubin-angular-league-masteries';
import masteriesTemplate from './masteries.tpl.html';

angular.module('yubin-angular-league-showcase', [
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
