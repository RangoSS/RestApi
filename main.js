function bookSearch(){
	var search=document.getElementById('search').value
	document.getElementById('results').innerHTML=""
	console.log(search)
    
    //q on the url is asking
	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" +search,
		dataType:"json",
		success:function(data){
			for (i=0; i<data.items.length;i++){
				results.innerHTML +="<h2>" + data.items[i].volumeInfo.title + "<h2>"
			}
		},
		type:'GET'
	});
}

document.getElementById('button').addEventListener('click',bookSearch,false)