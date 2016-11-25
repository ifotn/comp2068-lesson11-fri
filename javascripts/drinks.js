/**
 * Created by RFreeman on 11/25/2016.
 * Creating an Angular Application and Controller
 */
angular.module('DrinksApp', [])
    .controller('DrinksController', function($scope) {

        // create an initial drinks list
        $scope.drinks = ["Smirnoff Ice", "Coors Light", "Molson Canadian", "Chardonnay"];

    });
