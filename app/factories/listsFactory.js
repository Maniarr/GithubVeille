app.factory('listsFactory', ['$http', function ($http)
{
    var urlAPI_search = "https://api.github.com/search/repositories";
    var getLists = function (filters, page)
    {
        if (page === undefined)
                page = 1;
        return ($http.get(urlAPI_search + '?' + filters + '&page=' + page));
    };

    return ({
        getLists: getLists
    });
}]);