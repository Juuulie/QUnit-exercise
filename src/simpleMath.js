SimpleMath = function(){
	// todo
};

SimpleMath.prototype.getFactorial = function (number){
	// todo
	//return (number==1)?1:number*this.getFactorial(number-1);
	//console.log(number);
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
};

SimpleMath.prototype.average = function (number1, number2){

};