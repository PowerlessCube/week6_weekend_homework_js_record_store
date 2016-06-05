var Record = require( './record' );
var RecordStore = require( './record_store' );
var _ = require( 'lodash' );

var Customer = function( name, balance ) {
  this.name = name;
  this.balance = balance;
  this.collection = [];
};

Customer.prototype = {
  // TODO: can buy records.



  // TODO: can sell records.
};

module.exports = Customer;
