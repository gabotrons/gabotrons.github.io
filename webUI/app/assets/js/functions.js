$(document).ready(function() {
	var searchInput = $('#searchText'),
		widthDefault = $('#searchText').width(),
		widthAnimate = '500px',
		carousel = $(".slidermost"),
		linkApp = 'http://gabotrons.github.io/webUI/app/';

	//Animate the widht on focus
	searchInput.focus(function() {
		$(this).animate({width: widthAnimate}, 200);
		$(this).focusout(function() {
			$(this).animate({width: widthDefault}, 200);
		});
	});
	
	//Show/hide for recent searches
	$('.js-showmore').click(function() {
		$(this).find('span').toggleClass('fa-angle-down fa-angle-up').parent().prev('ul').children('li.hide').slideToggle();
	});

	//Show/hide for slider
	$('.js-btnshowhide').click(function() {
		$(this).toggleClass('fa-angle-up fa-angle-down').parents().next('div').slideToggle();
	});

	//Validate search
	$('#searchText').blur(function(){
		if( $(this).val().length === 0 ) {
			$(this).addClass('warning');
			return false;
		}
	});

	//Search obtaining the json file
  	$('#searchText').keypress(function(e){
    	var searchingTerm = $(this).val();
        if(e.which == 13 && searchingTerm.length != 0){
        	$(this).removeClass('warning');
			$.getJSON( "results.json", function( json ) {
            	$('.js-resultsnum').html("Found <strong>" + json.data.length + " articles</strong> with the word: <strong>" + searchingTerm + "</strong>");
				var articles = [];
				$.each( json.data, function( key, val ) {
					var authorsRef = val.authors.author, 
						authors = "";
					for(i = 0;i < authorsRef.length;i ++){
						authors += "<a href='#'>";
						authors += authorsRef[i];
						authors += "</a> ";
					}
		    		articles.push( "<article><h2 data-title='" + val.title + "'>" + val.title + "</h2>" + 
    							   "<div class='social'>" +
								   "<span class='twitter fa fa-twitter-square fa-lg'></span>" +
								   "<span class='facebook fa fa-facebook-square fa-lg'></span>" +
								   "</div>" +
		    					   "<div class='authors'>" + authors + "</div>" + 
		    					   "<div data-description='" + val.description + "' class='description mgtop10'>" + val.description + "</div>" + 
		    					   "<div class='pags mgtop10'>Pages." + val.pags + "</div>" + 
		    					   "<a href='article.html' class='btn' data-id='" + key + "'>Consult Article</a>" +
		    					   "</article>");
				});
				//console.log( "JSON Data: " + articles);
				$('.articles').html(articles);
			});            
        }else{
        	$(this).addClass('warning');
        }
    });

	//Configuration with plug in for slider
	carousel.owlCarousel({
		items:4
	});
	$(".next").click(function(event) {
		carousel.trigger('owl.next');
	});
	$(".prev").click(function(event) {
		carousel.trigger('owl.prev');
	});

	//Facebook API
	$(document).on('click','.facebook', function(e){
		var article = $(this).parents('article'),
			title = article.find('h2').data('title'),
			description = article.find('.description').data('description');
		console.log(title);
		e.preventDefault();
		FB.ui(
		{
			method: 'feed',
			name: title,
			link: linkApp,
			picture: linkApp + 'images/find-books.jpg',
			caption: title,
			description: description
		});
	});
	$('.searches__item').click(function() {
		var recentSearch = $(this).text();
		var e = jQuery.Event("keypress");
		e.which = 13; // # Some key code value
		$('#searchText').val(recentSearch).trigger(e);

	});

});