// console.log('script connected');

combineText('John', 'ironahtnaiel');



//blueprint
function combineText(name, item){
	var txtPart = ' , have you seen the ';
	var final = '';

	if(name.length <= 10){
		final += name;
		final += txtPart;

	}else{
		alert('Name has too many characters, please try another one.');
		return;
	}

	if(item.length <= 10){
		final += item;
		final += '?';
	}else{
		alert('Item has too many characters, please try another one.');
		return;
	}





	/*if(name.length > 10 || item.length > 10){
		if(name.length > 10){
			alert('Name has too many characters, please try another one.');
		}else{
			alert('Item has too many characters, please try another one.');
		}
		return;
	}*/

	/*if(name.length > 10 || item.length > 10){
		if(name.length > 10){
			final = 'Name';
		}else{
			final = 'Item';
		}
		alert(final + ' has too many characters, please try another one.');
		return;
	}*/

	if(name.length > 10 || item.length > 10){

		if(name.length > 10 && item.length > 10){
			final = 'Name and Item';
		}else if(name.length > 10){
			final = 'Name';
		}else{
			final = 'Item';
		}

		alert(final + ' has too many characters, please try another one.');
		return;
	}

	final += name;
	final += txtPart;
	final += item;
	final += '?';

	console.log(final);
}

//conditionals
//--------------
//if
//if else
//if else if 
//switch case
//ternary


//loops
//--------------
//while
//do while
//for
//for of
//for in
