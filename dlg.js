angular.module('tomw', [])
  .directive('tomwDlg', function() {
    return {
      // Only apply too elements with attribute tomw-dlg
      restrict: 'A',
      // Include any child elements in ng-transclude in the template
      transclude: true,
      // Template for the dialog
      templateUrl: 'dlg.html',
      scope: {
        // Title for the dialog
        dlgTitle: '=',
        // Body text for the dialog
        dlgContent: '=',
        // Bool to show or hide the dialog
        dlgShow: '=',
        // Function to call when the OK button is clicked
        dlgAction: '&'
      }, 
      controller: function($scope) {
        // When OK is clicked, close the dialog
        // and call the supplied dlgAction
        $scope.posClick = function() {
          $scope.dlgShow = false;
          $scope.dlgAction();
        };
        // When Cancel is clicked, close the dialog
        $scope.negClick = function() {
          $scope.dlgShow = false;
        };
      }
    };
  });