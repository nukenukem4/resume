$(document).ready(function(){
    $(".nav, .slider, .skill").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    
  	var toggle = function() {
  		$("#textMenu").toggleClass("open");
  	};
    $("#close, #menu").on("click", "i", function() {
    	toggle();
    });
	$(".menu_mobile").on("click", "a", function() {
		toggle();	
	})
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	 	lightbox.option({
      'albumLabel': "Работа %1 из %2"
    });
});