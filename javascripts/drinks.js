/**
 * Created by RFreeman on 11/25/2016.
 * Creating an Angular Application and Controller
 */
angular.module('DrinksApp', [])
    .controller('DrinksController', function($scope) {

        // create an initial drinks list
        $scope.drinks = ["Smirnoff Ice", "Coors Light", "Molson Canadian", "Chardonnay"];

        // add a new drink
        $scope.addDrink = function() {
            $scope.drinks.push($scope.drinkName);

            // clear the textbox
            $scope.drinkName = '';
        };

        // remove a drink from the list
        $scope.removeDrink = function() {
            if (confirm('This drink is delicious!  Are you really that crazy??')) {
                $scope.drinks.splice(this.$index,1);
            }
        };
    });
