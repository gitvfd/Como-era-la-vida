function DQ_GDP(year,country){
	d3.tsv("data/DQ_GDP.tsv", function(tsv) {
		

		var dq_Data=tsv.filter(function(d) {
			
	      return(d.variable== parseFloat(year) && d.country==country)
	    });
	    
	    if(dq_Data!=""){
	    	var text = "La calidad de los datos en " + country + " es igual a " + dq_Data[0].value + " En " + year ;
			document.getElementById("DQ_GDP").innerHTML= text;
		}
		else{
			document.getElementById("DQ_GDP").innerHTML= "No hay información sobre la calidad de los datos para este año";
		}

	});
}