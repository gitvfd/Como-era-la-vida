function DQ_SO2(year,country){
	d3.tsv("data/DQ_CO2SO2.tsv", function(tsv) {
		

		var dq_Data=tsv.filter(function(d) {
			
	      return(d.variable== parseFloat(year) && d.country==country)
	    });
	    
	    if(dq_Data!=""){
	    	var text = "La calidad de los datos en " + country + " es igual a " + dq_Data[0].value + " En " + year ;
			document.getElementById("DQ_SO2").innerHTML= text;
		}
		else{
			document.getElementById("DQ_SO2").innerHTML= "No hay información sobre la calidad de los datos para este año";
		}

	});
}