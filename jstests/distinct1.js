
t = db.distinct1;
t.drop();

t.save( { a : 1 } )
t.save( { a : 2 } )
t.save( { a : 2 } )
t.save( { a : 2 } )
t.save( { a : 3 } )


res = t.distinct( "a" );
assert.eq( "1,2,3" , res.toString() , "A" );

t.drop();

t.save( { a : { b : "a" } , c : 12 } );
t.save( { a : { b : "b" } , c : 12 } );
t.save( { a : { b : "c" } , c : 12 } );
t.save( { a : { b : "c" } , c : 12 } );

res = t.distinct( "a.b" );
assert.eq( "a,b,c" , res.toString() , "B" );
