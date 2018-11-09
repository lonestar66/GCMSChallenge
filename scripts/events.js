let fnSelectSort = function(){
	//console.log($(this).val());
	switch ($(this).val()){
		case 'evens':
			getEvenPosts();
			break;
		case 'odds':
			
			break;
		default:
			
			break;
	}
}


let bindEvents = function(){
	$("#ddSort").on("change", fnSelectSort);
};

$(function(){
	bindEvents();
});