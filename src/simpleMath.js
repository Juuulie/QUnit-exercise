SimpleMath = function(){
	// todo
};

SimpleMath.prototype.getFactorial = function (number){
	// todo
	if(number<0){
		throw new Error ("There is no factorial for negative number");
	}else{
		var fact = 1;
		
		for (var i = 1; i <= number; i++) {
			fact *= i;
		};
		return fact;
	}


};

SimpleMath.prototype.signum = function (number){
	// todo

	if(number>0){
		return 1;
	}else if(number<0){
		return -1;
	}else{
		return 0;
	}
};

SimpleMath.prototype.average = function (number1, number2){
	return (number1+number2)*0.5;
};