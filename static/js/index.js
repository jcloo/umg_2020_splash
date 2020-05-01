function scrollToAnchor(aid){
  	  var aTag = $("#"+ aid);
  	  $('body').css({
  	  	overflow: 'initial'
  	  });
  	  $('html,body').animate({scrollTop: aTag.offset().top},'slow').promise().then(
  	  		function() {
  	  			$('body').css({
  	    	  	overflow: 'hidden'
  	    	  });
  	  		}
  	  );
}

$(".scrollTo").click(function() {
   	 scrollToAnchor($(this).data('href'));
});
