
$.each($('.book'), function( index, value ) {
  let isbn = $(value).data('isbn');
  $.ajax({
    dataType: 'json',
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
    success: (response) => {
        $.each( response.items, function( i, item ) {
    
            var title    = item.volumeInfo.title,
                author   = item.volumeInfo.authors[0],        
                thumb    = item.volumeInfo.imageLinks.thumbnail;
            
            $('.title').eq(index).text( title );
            $('.author').eq(index).text( author );
            $('.thumbnail').eq(index).attr('src', thumb);
          });
        
    }
  });
  
});
