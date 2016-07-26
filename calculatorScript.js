//variables
var amount = 0;
var mathsOperation = null;
var secondAmount = 0;
var endValue = 0;
var equals = null;

//maths operation functions
function operation(sign){
	if(sign==='='){
		document.getElementById('equalsSign').innerHTML = "=";
		if(mathsOperation==='+'){
			endValue = amount + secondAmount;
		}
		else if(mathsOperation==='-'){
			endValue = amount - secondAmount;
		}
		else if(mathsOperation==='*'){
			endValue = amount * secondAmount;
		}
		else if(mathsOperation==='/'){
			endValue = amount / secondAmount;
		}
		document.getElementById('endAmount').innerHTML = endValue;
	}
	
	else if(!sign){
		document.getElementById('symbol').innerHTMl = "Select a maths operation";
	}
	else{
		mathsOperation = sign
		document.getElementById('symbol').innerHTML = mathsOperation;
		disableOperationsButtons(true);
	}
}

//number input functions
function valueSelected(firstEntry){
	if(!mathsOperation){
		amount = (amount * 10) + firstEntry;
		document.getElementById('amount').innerHTML = amount;
		disableOperationsButtons(false);
	}
	else if(!equals){
		secondAmount = (secondAmount * 10) + firstEntry;
		document.getElementById('secondAmount').innerHTML = secondAmount;
		disableOperationsButtons(false);
	}
	else{
		disableNumberButtons(true);
	}
}

// Clear button functions
function clearCalculator(){
	amount = 0;
	secondAmount = 0;
	mathsOperation = undefined;
	document.getElementById('amount').innerHTML = null;
	document.getElementById('symbol').innerHTML = null;
	document.getElementById('secondAmount').innerHTML = null;
	document.getElementById('equalsSign').innerHTML = null;
	document.getElementById('endAmount').innerHTML = null;
}


//disable maths operation and number buttons functions
function disableOperationsButtons(disable){
	document.getElementById('minus').disabled = disable;
	document.getElementById('add').disabled = disable;
	document.getElementById('divide').disabled = disable;
	document.getElementById('multiply').disabled = disable;
	document.getElementById('equals').disabled = disable;
}

function disableNumberButtons(disable){
	document.getElementById('number1').disabled = disable;
	document.getElementById('number2').disabled = disable;
	document.getElementById('number3').disabled = disable;
	document.getElementById('number4').disabled = disable;
	document.getElementById('number5').disabled = disable;
	document.getElementById('number6').disabled = disable;
	document.getElementById('number7').disabled = disable;
	document.getElementById('number8').disabled = disable;
	document.getElementById('number9').disabled = disable;
	document.getElementById('number0').disabled = disable;
}
