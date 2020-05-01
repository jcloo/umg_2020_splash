function scrollToAnchor(aid){
  	  var aTag = $("#"+ aid);
  	  $('body').css({
  	  	overflow: 'initial'
  	  });
      console.log("scrolling animation start");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow').promise().then(
  	  		function() {
  	  			$('body').css({
  	    	  	overflow: 'hidden'
  	    	  });
  	  		}
  	  );
      console.log("scrolling animation done");
}

$(".scrollTo").click(function() {
    console.log($(this).data('href'));
   	 scrollToAnchor($(this).data('href'));
     console.log("it scrolled");
});
