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

  findByAlbum: function(album) {
    return _.find( this.inventory, function(Record) {
      return Record.album === album;
    } )
  }

  // FIXME: - Surely it can't be as easy as just writing this.inventory?

  // TODO: - Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold



  // TODO: - Create a method that reports on the financial situation of the store. Cash and value of inventory.

};

module.exports = RecordStore;
