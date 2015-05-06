
(function() {
  var app = angular.module('productStore', []);
  app.controller('StoreController', function(){
    this.products = products;
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
      controller: function(){
    this.Preview = {};
    this.Preview.stars = "" ;
    this.Preview.body = "";
    this.Preview.email = "";
    this.submitFunction = function()
    {       
         $http.post("jsonplay.php",this.Preview).success(function(){
          alert('data sent succesfully');
       }).error(function()
         {
          alert('failed');
         });
         alert('Form submitted');
         document.getElementById('formm').reset();
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

  var products = [
    {
      name: 'Product 1',
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
      name: 'Product 2',
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
      name: 'Product 3',
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