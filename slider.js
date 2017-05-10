
	var slideCount = $('#slider ul li').length;
	var slideWidth = $("#sliderContainer").width();
	$('#slider ul li').width();
	var slideHeight = $('#sliderContainer').height() - $('#sliderContainer h3.slider-title').height() - 40;
	
	var sliderUlWidth = slideCount * slideWidth;
	
	function setImageViewer(){
			var slideCount = $('#slider ul li').length;
	var slideWidth = $("#sliderContainer").width();
	//$('#slider ul li').width();
	var slideHeight = $('#sliderContainer').height() - $('#sliderContainer h3.slider-title').height() - 40;
	
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	//$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
			$('#slider ul').animate(
				{left: slideWidth}, 200, 
				function () {
					$('#slider ul li:last-child').prependTo('#slider ul');
					$('#slider ul').css('left', '');
        });
		};

		function moveRight() {
			$('#slider ul').animate({
				left: - slideWidth
			}, 200, function () {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

		
	}
	
	
	window.addEventListener("resize", function(){
		setImageViewer();
	});
	
	setImageViewer();