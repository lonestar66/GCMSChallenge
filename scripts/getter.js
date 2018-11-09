let colPosts;

let getAPIResponse = function(){
	$.get(
		"https://jsonplaceholder.typicode.com/posts",
		function(data){
			
			for(let i = 0; i<data.length; i++)
			{
				let objCur = data[i];
								
				let dvPst = $("<div class='post card'></div>");
				let dvPstBody = $("<div class='card-body'></div>");
				let spnTitle = $("<h5 class='card-title'></h5>").text(objCur.title);
				let spnBody = $("<span class='card-text'></span>").text(objCur.body);
				let spnUser = $("<footer class='blockquote-footer'></footer>").text(objCur.userId);
				
				dvPstBody.append(spnTitle);
				dvPstBody.append(spnBody);
				dvPstBody.append(spnUser);
				dvPst.append(dvPstBody);
				
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