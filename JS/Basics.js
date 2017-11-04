// declare module as used in basics.html

var jsApp = angular.module('dummy-module',[]);
/* [] in module() is used for minification
   Check link  to get deep insight :)
   https://docs.angularjs.org/tutorial/step_07#a-note-on-minification
*/

// We use scope component to provide data to our view

// Reference the controller defined in HTML
// Use the root element directive to play with controllers return within!
jsApp.controller('controller1', function($scope){
  /* Controller was defined in atrribute area of html elements
     It tells Angular that to pass into this scope object whenever this function is
     called.. Interesting right? Angular will take care of this mechanism ( I know you were worrying how would I implement it? lol)
   */
   $scope.first=10;
   $scope.second=5;

   // create function for scope object
   // updateValue() is a function which will be called for "on-click" event of button defined in HTML file
   $scope.updateValue = function() {
     $scope.calculation = $scope.first + ' * ' + $scope.second +
        " = " + (+$scope.first *  +$scope.second);
        // + before variable is used to type cast string to integer types
   };

});
// scope will links to variable in html elements to variables in scope
// Controller is receiving controller name and factory function
