(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBayController', ToBayController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBayController.$inject = ['ShoppingListCheckOffService'];
function ToBayController(ShoppingListCheckOffService) {
  var itemToBay = this;

 itemToBay.items = ShoppingListCheckOffService.ShowToBuyItems();
 itemToBay.BayItem = function (itemIndex) { ShoppingListCheckOffService.BayItem(itemIndex);
 };
 itemToBay.checkBasket = function () { ShoppingListCheckOffService.checkBasket();
 };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.boughtitems = ShoppingListCheckOffService.ShowBoughtItems();
  itemBought.checkBasket = function () { ShoppingListCheckOffService.checkBasket();
  };
}

function ShoppingListCheckOffService() {
var service = this;

var items = [
  {'name' : 'Cookies', 'quantity' : '10 bags'},
  {'name' : 'Chips', 'quantity' : '5 bags'},
  {'name' : 'Coke', 'quantity' : '7 bottles'},
  {'name' : 'Sweets', 'quantity' : '15 bags'},
  {'name' : 'Chocolate', 'quantity' : '20 bars'}
];

var boughtitems = [];

var checkBasket = "";

service.ShowToBuyItems = function () {
  return items;
}

service.BayItem = function (itemInd) {
  boughtitems.push(items[itemInd]);
  items.splice(itemInd, 1);
  return boughtitems;
}

service.checkBasket = function () {
  console.log(items.length);
  if (items.length == 0) {
      return true
      }
    return false
  }

service.ShowBoughtItems = function () {
  return boughtitems;
}

}
})();

//console.log(boughtitems);
