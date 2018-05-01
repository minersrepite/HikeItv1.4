$(document).ready(function(){

	var post = {};
	var post_array = [];

	$("textarea").keypress(function (e) {
	    if (e.keyCode == 13) {return false};
	});


	function makepost(post_obj){

		//make post 
		var post = $('<div class="post"></div>');

		var postDate = $('<div class="post-date"></div>');
		var postBody = $('<div class="post-body"></div>');
		

		//get day and month using function above
		postDate.append('<p class="day">15</p><p class="month">May</p>');

		//title and message from input from into divs
		postBody.append('<div class="post-title">'+post_obj.title+'<span class="author">&nbsp;-&nbsp;'+post_obj.name+'&nbsp;-&nbsp;</span></div>');
		postBody.append('<div class="post-message">'+post_obj.message+'</div>');

		//append into post div
		post.append(postDate);
		post.append(postBody);

		//append new post to start post div
		$(post).css('opacity', '0');
		$('.post-frame').prepend(post);
		$(post).fadeTo( 1000 , 1, function(){});

	}

	$('.post-btn').on('click', function(){

		//on click of post button gets values of inputs
		var title = $('.title').val();
		var name = $('.name').val();
		var message = $('.message').val();

		//checks if inputs are empty
		if(title != '' && name != '' && message !== ''){

			//adds values from inputs into a post object defined at top of file
			post.title = title;
			post.name = name;
			post.message = message;

			//passes the post object into a makepost method, above
			makepost(post);

		}else{
			alert('You left a field blank!');
		}
	})

});