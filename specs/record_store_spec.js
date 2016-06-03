var RecordStore = require( "../models/record_store" );
var assert = require( "chai" ).assert;

describe('RecordStore Object Tests:', function() {

  beforeEach(  function() {
    recordStore = new RecordStore( "North Star Records", "Edinburgh", 100 );
  });

  // FIXME: Test: RecordStore has a name, city and multiple records in it's inventory
  it('Should have a name', function() {
    assert.equal( "North Star Records", recordStore.name );
  });

  // FIXME: - test: the RecordStore a balance i.e. cash in bank.

  // FIXME: - test: Add records func.

  // FIXME: - Test: method that lists the inventory.

  // FIXME: - TEST method RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold

  // FIXME: - Create a method that reports on the financial situation of the store. Cash and value of inventory.

});
