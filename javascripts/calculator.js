/**
 * Created by RFreeman on 11/18/2016.
 */
// reference the ng-app and ng-controller
// determine x & y
// run the correct calculation
// return the result to html view
angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {

    // set the result after running the calculation
    $scope.result = function() {

        /*if ((!isNaN($scope.x)) || (!isNaN($scope.y))) {
            return 'Enter 2 numbers and select and operator';
        }*/

        switch ($scope.op) {
            case '+': {
                return parseInt($scope.x) + parseInt($scope.y);
                //break;
            }
            case '-': {
                return parseInt($scope.x) - parseInt($scope.y);
                //break;
            }
            case '*': {
                return parseInt($scope.x) * parseInt($scope.y);
                //break;
            }
            case '/': {
                return parseInt($scope.x) / parseInt($scope.y);
                //break;
            }
            default: {
                return 'Enter 2 numbers and select and operator';
                //break;
            }
        }
    };
});
