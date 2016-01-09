angular.module('app', ['tomw'])
  .controller('DlgDemo', function($scope) {
    $scope.showPop = false;
    
    $scope.confirmAction = function() {
      $scope.dlgTitle = 'Are you sure?';
      $scope.dlgContent = 'Are you sure you want to confirm this action?';
      $scope.showPop = true;
    };
    
    $scope.actionConfirmed = function() {
      console.log('Action was confirmed');
    };
  });