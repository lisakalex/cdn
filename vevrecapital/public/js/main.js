let is_bot = true;
setTimeout( function() {
    is_bot = false;
}, 3000 );

function addNotBotField() {
    const form = document.querySelector( "#contactForm" );
    if( is_bot || form.querySelector( ".properForm" ) ) {
        return;
    }

    const input = document.createElement( "input" );
    input.type="hidden";
    input.name="properForm";
    input.value="1";
    input.classList.add( "properForm" );
    form.appendChild( input );
}

document.addEventListener( "scroll", function() {
    addNotBotField();
}, {passive: true} );

document.addEventListener( "click", function() {
    addNotBotField();
}, {passive: true} );

document.addEventListener( "touchend", function() {
    addNotBotField();
}, {passive: true} );

// A $( document ).ready() block.
$( document ).ready(function() {
    var refreshButton = document.querySelector(".refresh-captcha");
	refreshButton.onclick = function() {
		$.ajax({
			url: 'secured',
			type: 'GET',
			
			success: function(response){
				var hashKey = response.captchaHash;
				$("#captchaToken").val(hashKey);
				document.querySelector(".captcha-image").src = 'secure/' + hashKey;
			}
		});
	}
});