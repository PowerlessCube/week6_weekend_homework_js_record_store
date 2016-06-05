var RecordStore = require( "../models/record_store" );
var Record = require( "../models/record" );
var Customer = require( "../models/customer" );
var assert = require( "chai" ).assert;

describe('Customer Object (empty collection)', function() {

  beforeEach( function() {
    // FIXME: how do I round numbers to 2 decimal places and still maintain them in number form?
    record1 = new Record( "AURORA", "All My Demons Greeting Me As A Friend", 11 );
    record2 = new Record( "Blur", "Think Tank", 8 );
    record3 = new Record( "Gorillaz", "Plastic Beach", 12 );
    record4 = new Record( "HighasaKite", "Camp Echo", 13 );

    customer1 = new Customer( "Anorak John", 50 );

    recordStore = new RecordStore( "Spin Play", "Edinburgh", 100 );
    recordStore.addRecordToInventory( record1 );
    recordStore.addRecordToInventory( record2 );
    recordStore.addRecordToInventory( record3 );
    recordStore.addRecordToInventory( record4 );
    customer1.buy( recordStore, record4 );
  });

  it('Check customer has a name', function() {
    assert.equal( "Anorak John", customer1.name );
  });

  it('Check customer has a balance', function() {
    assert.equal( 37, customer1.balance );
  });

  it('Check customer has a record collection :-)', function() {
    assert.deepEqual( [ record4 ], customer1.collection );
  });
  // XXX: can buy records.
  it('customer.buy func (Part 1): record can be bought and input into collection', function() {
    customer1.buy( recordStore, record2 );
    assert.deepEqual( [ record4, record2 ], customer1.collection );
  });

  it('customer.buy func (Part 2): record is removed from recordStore inventory', function() {
    customer1.buy( recordStore, record2 );
    assert.deepEqual( [ record1, record3 ], recordStore.inventory );
  });

  it('customer.buy func (Part 3): customer balance is reduced by records price', function() {
    customer1.buy( recordStore, record2 );
    assert.equal( 29, customer1.balance );
  });

  it('customer.buy func (Part 4): RecordStore balance is increased by records price', function() {
    customer1.buy( recordStore, record2 );
    assert.equal( 121, recordStore.balance );
  });

});
