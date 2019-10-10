
document.getElementById('lbsInput').addEventListener('input',function(e){

    
    var lbs =e.target.value;
    document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;

    document.getElementById('kgOutput').innerHTML=lbs/2.2046;
   
    document.getElementById('ozOutput').innerHTML=lbs*16;
    
 });
document.getElementById('heightinput').addEventListener('input',function(e){
	var hbs=e.target.value;
	document.getElementById('metersoutput').innerHTML=hbs/3.28;

	document.getElementById('centimeteroutput').innerHTML=hbs/30.48;

	document.getElementById('decimeteroutput').innerHTML=hbs/3.048;
}

	);
