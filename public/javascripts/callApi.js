apka.controller("MojController", function($scope,$http){
    $scope.kluczApi = "d5f5e834390dee47f165331b99b646fc"; 
    $scope.wyniki = [];
    $scope.tekst=";
    $scope.glowna = function() {
        $http.jsonp("https://api.themoviedb.org/3/discover/tv?first_air_date.gte=" + miesiac + "&sort_by=popularity.desc&api_key=’+$scope.kluczApi+’&callback=JSON_CALLBACK").then(function successCallback(dane) {
            $scope.wyniki = dane.result;
        }, function errorCallback (error) {
            alert("Houston, mamy problem z uzyskaniem danych.");
        });
    };
});

