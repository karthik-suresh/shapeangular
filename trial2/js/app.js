
(function() {
  var app = angular.module('productStore', []);
  app.controller('StoreController', function(){
    this.products = products;
  });
  
  app.controller('formCtrl',function(){    
  });

  app.directive('productDescription',function(){
    return {restrict: 'E',     
      templateUrl:'views/prod-desc.html'
    };
  });

  app.directive('productSpecification',function(){
    return {restrict: 'E',     
      templateUrl:'views/prod-spec.html'
    };
  });
app.directive('productReview',function(){
    return {restrict: 'E',     
      templateUrl:'views/prod-rev.html',
      controller: function($http,$scope){
    this.Preview = {};
    this.Preview.stars = "" ;
    this.Preview.body = "";
    this.Preview.email = "";
    $scope.subStars = "";
    $scope.subBody = "";
    $scope.subEmail = "";
    this.submitFunction = function(product)
    {   
      
         var status = $http({
          method : "post",
          url : "jsonplay.php",
          data : {
            stars : this.Preview.stars,
            body  : this.Preview.body,
            email : this.Preview.email
          }
         });
         status.success(function(data)
         {
            $scope.subStars = data.stars;
            $scope.subBody = data.body;
            $scope.subEmail = data.email;

            alert('Form submitted');
            $scope.revs = {};
            $scope.revs.stars = $scope.subStars;
            $scope.revs.body = $scope.subBody;
            $scope.revs.email = $scope.subEmail;
            product.reviews.push($scope.revs);
            $scope.revs = {};
            document.getElementById("formId").reset();
         });

         status.error(function(data)
         {
            $scope.subStars = "error from server";
            $scope.subBody = "error from server";
            $scope.subEmail = "error from server";
         });

      


         //document.getElementById('formm').reset();
    }
  },
  controllerAs: 'preview'
  };
  });
app.directive('productTab',function(){
    return {restrict: 'E',     
      templateUrl:'views/tab-ctrl.html',
      controller: function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  },
  controllerAs: 'tab'
    };
  });

app.controller('JSONcontoller', function($scope,$http){
  this.jsonobj = 
  [
  {"Name": "Karthik",
  "Class": "six"},
  {"Name": "Krishna",
  "Class": "seven"},
  {"Name": "Mukunda",
  "Class": "eight"}];
  $http.get("jsonplay.php")
    .success(function(response) {$scope.names = response;}).error(function(data,status)
      {
        alert('failed');
      });
});
  var products = [
    {
      name: 'Product1',
      description: "Some products have hidden qualities beyond their luster, beyond their shine... Azurite is one of those products.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: "images/1.jpg",
      reviews: [{
        stars: 5,
        body: "I love this product!",
        email: "joe@example.org"
      }, {
        stars: 1,
        body: "This product sucks.",
        email: "tim@example.org"
      }]
    },
    {
      name: 'Product2',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: "images/2.jpg",
      reviews: [{
        stars: 3,
        body: "I think this product was just OK, could honestly use more shine, IMO.",
        email: "JimmyDean@example.org"
      }, {
        stars: 4,
        body: "Any product with 12 faces is for me!",
        email: "productsRock@example.org"
      }]
    },
    {
      name: 'Product3',
      description: "Zircon is our most coveted and sought after product. You will pay much to be the proud owner of this gorgeous and high shine product.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: "images/3.jpg",
      reviews: [{
        stars: 1,
        body: "This product is WAY too expensive for its rarity value.",
        email: "turtleguyy@example.org"
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        email: "LouisW407@example.org"
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        email: "nat@example.org"
      }]
    }
  ];
})();