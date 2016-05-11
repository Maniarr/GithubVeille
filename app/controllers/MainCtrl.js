app.controller('MainCtrl', ['$scope', 'listsFactory', function ($scope, listsFactory)
{
    $scope.lists = {};
    $scope.endList = false;
    $scope.load = false;
    $scope.nb = 1;
    listsFactory.getLists('q=created:>2016-05-11&sort=stars&order=desc', $scope.nb).success(function (data, status)
    {
        $scope.lists = data;
    });

    $scope.addList = function ()
    {
        if ($scope.load)
            return;
        $scope.nb++;
        $scope.load = true;
        listsFactory.getLists('q=created:>2016-04-10&sort=stars&order=desc', $scope.nb).success(function (data, status)
        {
            data.items.forEach(function (item)
            {
                $scope.lists.items.push(item);
            });
            $scope.load = false;
        });
    };
}]);