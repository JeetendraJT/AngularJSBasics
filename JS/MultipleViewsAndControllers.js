// declare module as used in basics.html

var jsApp = angular.module('multiple-contollers-and-views',[]);

// controller to generate random odd and even numbers
jsApp.controller('controller1', function($scope) {
  var random1 =  Math.floor(Math.random() * 100) + 1;
  if( (random1 % 2) == 0)
    $scope.randomOdd = random1+1;
  else
    $scope.randomOdd = random1;

  var random2 =  Math.floor(Math.random() * 100) + 1;
  if( (random2 % 2) != 0)
    $scope.randomEven = random2+1;
  else
    $scope.randomEven = random2;

});

// Another controller to generate days of week randomly
jsApp.controller('controller2', function($scope){
  var daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // get random index
  $scope.randomDay = daysOfWeek[Math.floor(Math.random() * 7)];
});

// Another controller to generate month names randomly
jsApp.controller('controller3', function($scope){
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                  "Aug", "Sep", "Oct", "Nov", "Dec"];

  // get random index
  $scope.randomMonth = months[Math.floor(Math.random() * 12)];
});
