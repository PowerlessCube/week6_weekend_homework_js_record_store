// TODO: - Create a RecordCollector (or customer) constructor who can buy and sell records.
var Record = require( './record' );
var RecordStore = require( './record_store' );
var _ = require( 'lodash' );

var Customer = function(name, address) {
  this.name = name;
  this.address = address;
  this.collection = [];
};

Customer.prototype = {
  // TODO: can buy records.



  // TODO: can sell records.
};
