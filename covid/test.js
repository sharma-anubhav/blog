function setup(){
	loadJSON("https://api.covid19api.com/world/total" , gotdata , 'jsonp');
}
function gotdata(data){

	println(data);
	var cases = data.TotalConfirmed;
	document.getElementById('cases').innerHTML = cases;
	//document.write(data)
}
