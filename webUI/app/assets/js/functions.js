$(document).ready(function() {
	var searchInput = $('#searchText'),
		widthDefault = $('#searchText').width(),
		widthAnimate = '500px';

	searchInput.focus(function() {
		$(this).animate({width: widthAnimate}, 200);
		$(this).focusout(function() {
			$(this).animate({width: widthDefault}, 200);
		});
	});

	$('.js-showmore').click(function() {
		$(this).find('span').toggleClass('fa-angle-down fa-angle-up').parent().next('ul').slideToggle();
	});
	$('.js-btnshowhide').click(function() {
		$(this).toggleClass('fa-angle-up fa-angle-down').parents().next('div').slideToggle();
	});

  	$('#searchText').keypress(function(e){
    	var searchingTerm = $(this).val();
        if(e.which == 13){
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
		    		articles.push( "<article><h2>" + val.title + "</h2>" + 
		    					   "<div class='authors'>" + authors + "</div>" + 
		    					   "<div class='description mgtop10'>" + val.description + "</div>" + 
		    					   "<div class='pags mgtop10'>Pages." + val.pags + "</div>" + 
		    					   "<button data-id='" + key + "'>Consult Article</button" +
		    					   "</article>");
				});
				//console.log( "JSON Data: " + articles);
				$('.articles').html(articles);
			});            
        }
    });

});