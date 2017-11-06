var jsApp = angular.module('data-change-of-controller-in-veiws', []);

jsApp.controller('clsTakenListCtr', function($scope) {

  $scope.classes = [
                      {subject: "Algo", taken: false},
                      {subject: "Comp-Architecture", taken: false},
                      {subject: "OS", taken: false},
                      {subject: "Data-Mining", taken: false}
                     ];
});
