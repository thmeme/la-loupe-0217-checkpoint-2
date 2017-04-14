angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth, UserService) {

      $scope.user = {
                  pseudo: '',
                  email: '',
                  password: '',
              };
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
              console.log('user', $scope.user);
                $state.go('anon.login');
            });
        };
    });
