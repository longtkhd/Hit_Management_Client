


    var nav_offset_top = document.getElementsByTagName('header').height + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if (document.getElementsByClassName('.header_area').length ){ 
            document.getElementsByClassName(window).scroll(function() {
                var scroll = document.getElementsByClassName(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    document.getElementsByClassName(".header_area").addClass("navbar_fixed");
                } else {
                    document.getElementsByClassName(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

//     //------- Parallax -------//
//   skrollr.init({
//     forceHeight: false
//   });



  //------- mailchimp --------//  
// 	function mailChimp() {
//         document.getElementById('#mc_embed_signup').find('form').ajaxChimp();
// 	}
//   mailChimp();


    document.getElementsByTagName('select').niceSelect;

    /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if (document.getElementsByClassName('.testimonial').length) {
        document.getElementsByClassName('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }




  




