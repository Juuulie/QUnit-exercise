/* Sum
***************************************************************** */

module( 'Sum', {
	setup : function() {
	}, teardown : function(){
	},
});
test('Sum', function(){
	sum(30, 20, 50, "50 = 30 + 20");
});


/* isPrime
***************************************************************** */
module( 'isPrime', {
	setup : function() {
	}, teardown : function(){
	},
});
test('isPrime', function(){
	isPrime(7, 'is prime ?');
	isPrime(8, 'is prime ?');
	isPrime(7, 'is prime ?');
});