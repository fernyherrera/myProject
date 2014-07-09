angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.cards = [
    {title:"Marty McFly",date:"November 05, 1955", image: "img/mcfly.jpg", body:"This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.", likes:1, comments:5},
    {title:"Marty McFly",date:"November 05, 1955", image: "img/mcfly.jpg", body:"This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.", likes:1, comments:5}
  ];

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    var newCard = // new card data
      $scope.cards.push(newCard);
  };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
