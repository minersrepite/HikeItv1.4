/*
	All js/jquery code is to be placed inside this function to ensure that any javascript for this
	page runs after the HTML has loaded.
*/

$(document).ready(function(){

	var burgerOpen = false;

	//image fade animation
	$( ".bg" ).fadeTo( 1500 , 1, function() {
   		$( ".floating-text" ).fadeTo( 800 , 1, function(){});
  	});

	//make links at top of page scroll to relevant elements identified by element class/id
  	$(".links li, .footer-links li, .mobile li").click(function() {
  		if($(this).attr("class") != ''){
	  		var destination = $(this).attr("class");
		    $('html, body').animate({
		        scrollTop: $('.'+destination+'-section').offset().top
		    }, 600);
		}
	});

  	//for mobile/tablet: makes link list open and close (animates height of ul between 1px and 100px)
  	//when the burger menu us pressed
	$('.burger').on('click', function(){
		if(burgerOpen == false){
			$('.mobile').animate({
			        height: 100
			}, 400, function(){burgerOpen = true;});
		}else if(burgerOpen == true){
			$('.mobile').animate({
			        height: 0
			}, 400, function(){burgerOpen = false;});
		}
	})
});
