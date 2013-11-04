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
	// todo
	equal(this.simpleMath.getFactorial(0), 1, 'Factorial of 0 must equal 1');

});

test('throwing an error when calculating the factorial for a negative number', function(){
	raises(function(){
		// todo
		this.simpleMath.getFactorial(-10);
	}, "There is no factorial for negative number");
})