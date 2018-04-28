'use strict';

app
    .controller('itemList',function($scope, $ionicPopup, $http, $firebase){

        var url = 'https://fab-s-5d196.firebaseio.com/items.json';
       // var ref = firebase.database().ref("items");
    
      $scope.items = getItems();

  $scope.addItem = function() {
    var newItem = $scope.newItem = {id: $scope.items.length, title:"", description:""};
    var itemTemplate= '<input type="text" placeholder="titre" ng-model="newItem.title"><br/><input type="text" placeholder="username" ng-model="newItem.user.username"><br/><textarea ng-model="newItem.description" placeholder="description"></textarea>';
    
      
    var myPopup = $ionicPopup.show({
        template:itemTemplate,
        title:'ajouter une annonce',
        scope: $scope,
        buttons: [
            { text: 'annuler' },
            {
                text: '<b>ajouter</b>',
                type: 'button-positive',
                onTap: function(e){
                    if (!$scope.newItem.title){
                        e.preventDefault();

                    }else {
                        //$scope.items.push($scope.newItem);
                            var postData = {
                              "name": newItem.title,
                              "description": newItem.description,
                              "user": newItem.user.username,
                              "id": $scope.items.length
                          
                            };
                            $http.post(url, postData).success(function(data) {
                              $scope.items = getItems();
                              console.log("myPopup",postData);
                              console.log(postData.uid);
                              
                            });
                          }

                    }
                }
            
        ]

    })
  
  
  };

  function getItems() {
    var items = [];
    $http.get(url).success(function(data) {
        console.log("fonction getItem",data);
      angular.forEach(data, function(value, key) {
        var zizi = {name: value.name, description: value.description, user: value.user,id: value.id};
        console.log("la zizi", zizi.id)
          items.push(zizi);
          /* var description = {description: value.description};
          items.push(description);
          var user = {user: value.user};
          items.push(user); */
      });
    });

    return items;
  };

  $scope.delete = function(id){
      console.log("info",id);
    console.log("id to del",id);
    console.log("id to del",$scope.items[i]);
    
    for(var i = 0; i < $scope.items.length; i++){
        if ($scope.items[i].id === id){
            var azer = $scope.items.splice(i,1);
            $http.set(url, azer).success(function(data) {
                $scope.items = getItems();
                
                
              });
            
            
            return;
        }
    } 

};

});