function DQ_INCOMEINEQ(year,country){
	d3.tsv("data/DQ_INCOMEINEQ.tsv", function(tsv) {
		

		var dq_Data=tsv.filter(function(d) {
			
	      return(d.variable== parseFloat(year) && d.country==country)
	    });
	    
	    if(dq_Data!=""){
	    	var text = "La calidad de los datos en " + country + " es igual a " + dq_Data[0].value + " En " + year ;
			document.getElementById("DQ_INCOMEINEQ").innerHTML= text;
		}
		else{
			document.getElementById("DQ_INCOMEINEQ").innerHTML= "No hay información sobre la calidad de los datos para este año";
		}

	});
}