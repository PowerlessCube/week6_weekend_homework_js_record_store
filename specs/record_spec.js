var Record = require( '../models/record' );
var assert = require( 'chai' ).assert;

describe('Record Object Tests:', function() {

  beforeEach( function() {
    record1 = new Record( "AURORA", "All My Demons Greeting Me As A Friend", 10.99 );
    record2 = new Record( "Blur", "Think Tank", 7.99 );
    record3 = new Record( "Gorillaz", "Plastic Beach", 11.99 );
  });

  it('Record object has artist', function() {
    assert.equal( "AURORA", record1.artist );
  });

  it('Record object has album', function() {
    assert.equal( "Think Tank", record2.album );
  });

  it('Record object has price', function() {
    assert.equal( 11.99, record3.price );
  });

});
