jQuery(document).ready(function() {
    


jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 20){
    jQuery('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


/* Scrool Top */
jQuery(function() {
   jQuery(window).scroll(function() {
      if(jQuery(this).scrollTop() != 0) {
         jQuery('#toTop').fadeIn(); 
      } else {
         jQuery('#toTop').fadeOut();
      }
   });
 
   jQuery('#toTop').click(function() {
      jQuery('body,html').animate({scrollTop:0},800);
   });   
});
/* Scrool Top */



    jQuery('.slideshow').owlCarousel({
      navigation : true,
     // navigationText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'], 
      loop: true,
      pagination: false,
      margin:0,
      autoPlay: 3000, //Set AutoPlay to 3 seconds 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      itemsTablet: [736,1], //2 items between 600 and 0;
      itemsMobile : [480,1]
 
  });

     // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

  /* if in tab mode */
    jQuery("ul.tabs li").click(function() {
      
      jQuery(".tab_content").hide();
      var activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+activeTab).fadeIn();    
      
      jQuery("ul.tabs li").removeClass("active");
      jQuery(this).addClass("active");

     jQuery(".tab_drawer_heading").removeClass("d_active");
     jQuery(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
     
    });
    jQuery(".tab_container").css("min-height", function(){ 
      return jQuery(".tabs").outerHeight() + 0;
    });
   /* if in drawer mode */
   jQuery(".tab_drawer_heading").click(function() {
      
      jQuery(".tab_content").hide();
      var d_activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+d_activeTab).fadeIn();
     
     jQuery(".tab_drawer_heading").removeClass("d_active");
      jQuery(this).addClass("d_active");
     
     jQuery("ul.tabs li").removeClass("active");
     jQuery("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
   
   
   // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    jQuery(".tab_content1").hide();
    jQuery(".tab_content1:first").show();

  /* if in tab mode */
    jQuery("ul.tabs1 li").click(function() {
      
      jQuery(".tab_content1").hide();
      var activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+activeTab).fadeIn();    
      
      jQuery("ul.tabs1 li").removeClass("active");
      jQuery(this).addClass("active");

     jQuery(".tab_drawer_heading1").removeClass("d_active");
     jQuery(".tab_drawer_heading1[rel^='"+activeTab+"']").addClass("d_active");
     
    });
    jQuery(".tab_container1").css("min-height", function(){ 
      return jQuery(".tabs1").outerHeight() + 0;
    });
   /* if in drawer mode */
   jQuery(".tab_drawer_heading1").click(function() {
      
      jQuery(".tab_content1").hide();
      var d_activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+d_activeTab).fadeIn();
     
     jQuery(".tab_drawer_heading1").removeClass("d_active");
      jQuery(this).addClass("d_active");
     
     jQuery("ul.tabs1 li").removeClass("active");
     jQuery("ul.tabs1 li[rel^='"+d_activeTab+"']").addClass("active");
    });
   
});

