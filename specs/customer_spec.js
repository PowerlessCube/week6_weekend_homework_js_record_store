var RecordStore = require( "../models/record_store" );
var Record = require( "../models/record" );
var Customer = require( "../models/customer" );
var assert = require( "chai" ).assert;

describe('Customer Object (empty collection)', function() {

  beforeEach( function() {

    record1 = new Record( "AURORA", "All My Demons Greeting Me As A Friend", 10.99 );
    record2 = new Record( "Blur", "Think Tank", 7.99 );
    record3 = new Record( "Gorillaz", "Plastic Beach", 11.99 );

    customer1 = new Customer( "Anorak John", 50 );

    recordStore = new RecordStore( "Spin Play", "Edinburgh", 100 );
    recordStore.addRecordToInventory( record1 );
    recordStore.addRecordToInventory( record2 );
    recordStore.addRecordToInventory( record3 );
  });

  it('Check customer has a name', function() {
    assert.equal( "Anorak John", customer1.name );
  });

  it('Check customer has a balance', function() {
    assert.equal( 50, customer1.balance );
  });

  it('Check customer has an empty collection :-(', function() {
    assert.deepEqual( [], customer1.collection );
  });

});

// FIXME: can buy records.

// FIXME: can sell records.
