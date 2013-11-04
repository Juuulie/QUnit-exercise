/* Factorial
***************************************************************** */

module( 'Factorial', {
	setup : function() {
		// return before
		this.simpleMath = new SimpleMath();
	}, teardown : function(){
		// return after
		delete this.simpleMath;
	},
});

test('calculating factorial for a positive number', function(){
	equal(this.simpleMath.getFactorial(3), 6, 'Factorial of three must equal six');
});

test('calculating factorial for zero', function(){
	equal(this.simpleMath.getFactorial(0), 1, 'Factorial of 0 must equal 1');
});

test('throwing an error when calculating the factorial for a negative number', function(){
	raises(function(){
		this.simpleMath.getFactorial(-10);
	}, "There is no factorial for negative number");
})


/* Signum
***************************************************************** */

module( 'Signum', {
	setup : function() {
		this.simpleMath = new SimpleMath();
	}, teardown : function(){
		delete this.simpleMath;
	},
});
test('Signum positive number', function(){
	equal(this.simpleMath.signum(3), 1, 'Signum of 3 must equal 0');
});

test('Signum for zero', function(){
	// todo
	equal(this.simpleMath.signum(0), 0, 'Signum of 0 must equal 0');

});

test('Signum negative number', function(){
	// todo
	equal(this.simpleMath.signum(-1000), -1, 'Signum of -1000 must equal -1');

});


/* Average
***************************************************************** */

module( 'Average', {
	setup : function() {
		this.simpleMath = new SimpleMath();
	}, teardown : function(){
		delete this.simpleMath;
	},
});
test('Signum positive number', function(){
	equal(this.simpleMath.average(0,12), 6, 'Average of 0 and 12 = 6');
});





