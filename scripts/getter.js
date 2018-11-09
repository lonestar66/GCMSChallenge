let colPosts;

let getAPIResponse = function(){
	$.get(
		"https://jsonplaceholder.typicode.com/posts",
		function(data){
			
			for(let i = 0; i<data.length; i++)
			{
				let objCur = data[i];
								
				let dvPst = $("<div class='post'></div>");
				let spnTitle = $("<span></span>").text(objCur.title);
				let spnBody = $("<span></span>").text(objCur.body);
				let spnUser = $("<span></span>").text(objCur.userId);
				
				dvPst.append(spnTitle);
				dvPst.append(spnBody);
				dvPst.append(spnUser);
				
				let objPst = {
					id: objCur.id,
					html: dvPst
				};
				
				colPosts.addPost(objPst);
			}
			
			$("#api-content").append(colPosts.getAllPosts());
		}
	);
	
}

let getEvenPosts = function(){
	colPosts.getEvenPosts();
}

let getOddPosts = function(){
	colPosts.getOddPosts();
}

let getAllPosts = function(){
	colPosts.getAllPosts();
}

$(function(){
	colPosts = new objPosts();
	getAPIResponse();
});