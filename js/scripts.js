$(function() {
	//Color on button when started
	$('#front').css("background-color", "#2eca7f");

	$('#front').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-front');
	});

	// $('#left').on('click', function() {
	// 	$('#cube')
	// 		.removeClass()
	// 		.addClass('cube')
	// 		.addClass('show-left');
	// });

	$('#top').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-top');
	});

	$('#right').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-right');
	});

	$('#bottom').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-bottom');
	});

	//Color change in navibuttons
	$('ul li a').click(function(){
		$('ul li a').css("background-color", "")
			$(this).css("background-color", "#2eca7f");
	});




//Resume hover
this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
	
	var $el = $( this ),
		$hoverElem = $el.find( 'div' ),
		direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
		styleCSS = self._getStyle( direction );
	
	if( event.type === 'mouseenter' ) {
		
		$hoverElem.hide().css( styleCSS.from );
		clearTimeout( self.tmhover );

		self.tmhover = setTimeout( function() {
			
			$hoverElem.show( 0, function() {
				
				var $el = $( this );
				if( self.support ) {
					$el.css( 'transition', self.transitionProp );
				}
				self._applyAnimation( $el, styleCSS.to, self.options.speed );

			} );
			
		
		}, self.options.hoverDelay );
		
	}
	else {
	
		if( self.support ) {
			$hoverElem.css( 'transition', self.transitionProp );
		}
		clearTimeout( self.tmhover );
		self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
		
	}
		
} );

});