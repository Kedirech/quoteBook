var app = angular.module("quoteBook");

app.controller("mainCtrl",function($scope, dataService){

$scope.test = "Test Text";
$scope.quotes = dataService.getQuotes();
$scope.deleteMe = function(textToDelete){
  dataService.removeData(textToDelete);
}

$scope.addQuote = function(){
  console.log("Here");
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
});