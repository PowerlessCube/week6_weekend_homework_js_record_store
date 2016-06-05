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
  }

  // TODO: can sell records.
};

module.exports = Customer;
