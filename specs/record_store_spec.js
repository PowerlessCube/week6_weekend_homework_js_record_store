var RecordStore = require( "../models/record_store" );
var assert = require( "chai" ).assert;

describe('RecordStore Object Tests:', function() {

  beforeEach(  function() {
    recordStore = new RecordStore( "North Star Records", "Edinburgh", 100 );
  });

  it('Should have a name', function() {
    assert.equal( "North Star Records", recordStore.name );
  });

  it('Should have a city', function() {
    assert.equal( "Edinburgh", recordStore.city );
  });

  it('Should have a balance', function() {
    assert.equal( 100, recordStore.balance );
  });

  it('Should have an empty inventory :-\(', function() {
    assert.deepEqual( [], recordStore.inventory );
  });

  // FIXME: - test: the RecordStore a balance i.e. cash in bank.

  // FIXME: - test: Add records func.

  // FIXME: - Test: method that lists the inventory.

  // FIXME: - TEST method RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold

  // FIXME: - Create a method that reports on the financial situation of the store. Cash and value of inventory.

});
