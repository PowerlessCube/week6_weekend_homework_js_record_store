var RecordStore = require( "../models/record_store" );
var Record = require( "../models/record" );
var assert = require( "chai" ).assert;

describe('RecordStore Object (empty inventory):', function() {

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

});

describe('RecordStore Object (full inventory)', function() {

  beforeEach(  function() {
    record1 = new Record( "AURORA", "All My Demons Greeting Me As A Friend", 10.99 );
    record2 = new Record( "Blur", "Think Tank", 7.99 );
    record3 = new Record( "Gorillaz", "Plastic Beach", 11.99 );
    record4 = new Record( "One Direction", "Go That Direction", 10.99 );

    recordStore = new RecordStore( "North Star Records", "Edinburgh", 100 );

    recordStore.addRecordToInventory( record1 );
    recordStore.addRecordToInventory( record2 );
    recordStore.addRecordToInventory( record3 );
  });

  it('Should be able to add records to store inventory', function() {
    recordStore.addRecordToInventory( record4 );
    assert.deepEqual( [ record1, record2, record3, record4 ], recordStore.inventory );
  });

  it('Can sell a record (Part 1) removes a record from the inventory)', function() {
    recordStore.sellRecord( record2 );
    assert.deepEqual( [ record1, record3 ], recordStore.inventory );
  });

  it('Can sell a record (Part 2) subtracts price from store balance', function() {
    recordStore.sellRecord( record2 );
    assert.equal( 107.99, recordStore.balance );
  });

  it('Can sell a record (Part 3) returns a sold record object', function() {
    assert.deepEqual( record2, recordStore.sellRecord( record2 ));
  });

  it('Can report total value of store\'s inventory + it\'s current balance', function() {
    assert.equal( 130.97, recordStore.finance() );
  });

  //Helper Functions Tests
  it('Find a record by by record object', function() {
    assert.deepEqual( record2, recordStore.findRecord( record2 ));
  });

  it('Returns index of record object', function() {
    assert.equal( 1, recordStore.findRecordIndex( record2 ));
  });

});
