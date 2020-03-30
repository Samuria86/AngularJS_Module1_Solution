(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {

    $scope.lunchMenu = [""];

    $scope.lunchCheck = function () {

      if ($scope.lunchMenu == "") {
        $scope.message = "Please enter data first";
      }

      else {

        var splitMenu = $scope.lunchMenu.split(",");
        var filteredMenu = splitMenu.filter(Boolean);

        if (filteredMenu.length <= 3) {
          $scope.message = "Enjoy!";

        }

        else if (filteredMenu.length >= 4) {
          $scope.message = "Too much!";

        }

      }

    }

  }

})();
