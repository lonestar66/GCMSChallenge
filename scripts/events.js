let fnSelectSort = function(){
	switch ($(this).val()){
		case 'evens':
			getEvenPosts();
			break;
		case 'odds':
			getOddPosts();
			break;
		default:
			getAllPosts();
			break;
	}
}


let bindEvents = function(){
	$("#ddSort").on("change", fnSelectSort);
};

$(function(){
	bindEvents();
});