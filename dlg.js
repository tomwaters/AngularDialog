angular.module('tomw', [])
  .directive('tomwDlg', function() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: 'dlg.html',
      scope: {
        dlgTitle: '=',
        dlgContent: '=',
        dlgShow: '=',
        dlgAction: '&'
      }, 
      controller: function($scope) {
        $scope.posClick = function() {
          $scope.dlgShow = false;
          $scope.dlgAction();
        };
        $scope.negClick = function() {
          $scope.dlgShow = false;
        };
      }
    };
  });