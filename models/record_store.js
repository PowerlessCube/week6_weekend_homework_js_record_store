var Record = require( "./record" );

var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype = {
  addRecordToInventory: function(record) {
    this.inventory.push( record );
    console.log(this.inventory);
  }
};
// TODO: - Add some records to your RecordStore.

// TODO: - Create a method that lists the inventory.

// TODO: - Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold

// TODO: - Create a method that reports on the financial situation of the store. Cash and value of inventory.

module.exports = RecordStore;
