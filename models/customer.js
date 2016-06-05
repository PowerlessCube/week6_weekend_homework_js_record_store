var Record = require( './record' );
var RecordStore = require( './record_store' );
var _ = require( 'lodash' );

var Customer = function( name, balance ) {
  this.name = name;
  this.balance = balance;
  this.collection = [];
};

Customer.prototype = {
  // XXX: can buy records.
  buy: function( recordStore, record2 ) {
    this.collection.push(recordStore.sellRecord( record2 ));
    this.balance -= record2.price;
  },

  // XXX: can sell records.
  sell: function( record, recordStore ) {
    var soldRecord = this.collection.splice( this.findRecordIndex(record), 1);
    this.balance += record.price;
    recordStore.inventory.push(soldRecord[0]);
  },

  //helper functions
  findRecord: function(recordObject) {
    return _.find( this.collection, function(record) {
      return record === recordObject;
    });
  },

  findRecordIndex: function(recordObjectIndex) {
    return _.findIndex( this.collection, function(record) {
      return record === recordObjectIndex;
    });
  }
};

module.exports = Customer;
