$(function(){

$("#userInfoButton").click(function(){
	submitUserInfo();
});

	function submitUserInfo() {
		var username = $("#username").val();
		var pass = $("#password").val();
		if(username==null || pass == null){
			alert("Please enter full Quizlet credentials, otherwise we cannot make a set for you :(");
		} else {
			quizletAuth(username, pass);
		}
	}


	function quizletAuth(username, pass) {
		var str = makeid();
		var redirectURI = "https://quizlet.com/authorize?response_type=code&client_id=4msU8P4c2B&scope=write_set&state="+str+"&redirect_uri="
		//alert(redirectURI);
	}

	function makeid()
		{
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}

});