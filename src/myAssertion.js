function sum(n1, n2, result, message){
	var expected = n1 + '+' + n2 + '=' + result;
	var actual = expected;
	if((n1 + n2) != result){
		actual = n1 + '+' + n2 + '!=' + result;
	}
	QUnit.push((n1 + n2) == result, actual, expected, message);
}

function isPrime(number, message){

	var expected = true; // on veut savoir si c'est un nb premier

	var nombrelimite = number/ 2;
	var check = 1;

	for(i = 2; i <= nombrelimite ; i++){

		// nb non premier
		if(number % i == 0){
	 		check = 0;
			
			QUnit.push(false, true, expected, message);
	 		return;
		}

	}
	// nb premier
	QUnit.push(true, true, expected, message);

}