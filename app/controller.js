app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];
    $scope.todoInput = {};


    $scope.todoAdd = function() {
        $scope.todoList.push(angular.copy($scope.todoInput));

    };



 $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
   };

}  );

