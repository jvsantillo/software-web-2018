function calculaIMC(){
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	
	if (isNaN(peso/(altura*altura))){
		alert("Informe um peso e/ou altura válidos!")
	} else {
		alert(Math.trunc(peso/(altura*altura)));
	}
	
		
}