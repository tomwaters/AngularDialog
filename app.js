// Add a dependency on the 'tomw' module which contains the 
// dialog directive
angular.module('app', ['tomw'])
  .controller('DlgDemo', function($scope) {
    // Hide the dialog initially
    $scope.showPop = false;
    
    // When the example button is clicked, show a dialog
    $scope.confirmAction = function() {
      $scope.dlgTitle = 'Are you sure?';
      $scope.dlgContent = 'Are you sure you want to confirm this action?';
      $scope.showPop = true;
    };
    
    // If the OK dialog button is pressed, carry out our ation
    $scope.actionConfirmed = function() {
      console.log('Action was confirmed');
    };
  });