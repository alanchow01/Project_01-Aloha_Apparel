// BOX SLIDER //
	$(function() {
		$('.bxslider').bxSlider({
			auto: true,
			autoHover: true,
			controls: false,
			easing: 'ease-in',
			minSlides: 2,
			maxSlides: 4,
			slideMargin: 0,
			slideWidth: 0,
			speed: 500,
		});
	});
	
// SMOOTH SCROLL //
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 100
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

// EMAIL CHECK //
	$(function() {
		$('#newsletter-form').on('submit', function(event) {
		   event.preventDefault();
		   if ( $('#your-email').val() == '' ) {
		      alert('Please enter a valid e-mail address.');
		   } else {
		      alert('You are now subscribed to our newsletter, thanks!');
		   }
		});
	});
	
// SHOPPING CART COUNTER //
	$(function() {
			var cartItems = 0;
		$('.products').on('click', 'button', function(event) {
			event.preventDefault();
			cartItems++;
			$('.cart-items').text(cartItems).show();
		});
	});