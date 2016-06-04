var Record = require( "./record" );
var _ = require( 'lodash' );

var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype = {
  addRecordToInventory: function(record) {
    this.inventory.push( record );
  },

  // TODO: - Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold

  // FIXME: Not sure Why I'm only getting back one item in the array...
  sellRecord: function(record) {
    var soldRecord = this.inventory.splice( this.findRecordIndex(record), 1);
    this.balance -= record.price;
    return soldRecord;
  },

  // TODO: - Create a method that reports on the financial situation of the store. Cash and value of inventory.

  //helper functions
  findRecord: function(recordObject) {
    return _.find( this.inventory, function(record) {
      return record === recordObject;
    });
  },

  findRecordIndex: function(recordObjectIndex) {
    return _.findIndex( this.inventory, function(record) {
      return record === recordObjectIndex;
    });
  }

};

module.exports = RecordStore;
