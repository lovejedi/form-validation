var formValidation = {
	init:function(e){
		$("#save").on("click", this.isRequired);
	},
	isRequired:function(e){
		//e.preventDefault();
		var form = event.target, 
		input = $("input", form);
		console.log(input);
		for (var i=0; i < input.length; i++){
			
			if(input[i].attr(req) == true && input[i].val() == ""){
				$(input[i]).addClass('.errorActive');

			}
			else{
				$(input[i]).removeClass('.errorActive');
			}
		}
	}

};

$(document).ready(function(){
	formValidation.init();
});