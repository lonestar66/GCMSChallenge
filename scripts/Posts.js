class objPosts {
	constructor(){
		this._aryPosts = {};
		this._dvContainer = $("<div></div>");
	}
	_clearDvContainer(){this._dvContainer.html('')};
	addPost(sPost) {
		this._aryPosts[sPost.id] = sPost.html;
	}
	getAllPosts(){
		this._clearDvContainer();
		
		$.each(this._aryPosts, $.proxy(function(ind, val){
			this._dvContainer.append(val);
		}, this))
		
		return this._dvContainer;
	}
	getEvenPosts(){
		this._clearDvContainer();
		
		$.each(this._aryPosts, $.proxy(function(ind, val, b){
			if(ind%2===0){
				this._dvContainer.append(val);
			}
		}, this))
		
		return this._dvContainer;
	}
	getOddPosts(){
		alert("odds")
	}
};