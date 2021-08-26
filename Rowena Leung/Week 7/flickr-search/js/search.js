let currentPage = 1;
let lastPageReached = false;
//global variables
//functions
//access the Flickr api
const searchFlickr = (function (keywords, currentPage){
  if (lastPageReached){
    return;
  }
  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?"; //JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: currentPage
  }).done(showImages).done(function (info){
    if(info.photos.pages >= info.photos.pages){
      lastPageReached = true;
      console.log("You've reached " + currentPage)
      }
    });
  });
  //show images on the screen
  const showImages = function (results){

    _(results.photos.photo).each(function (photo){
      const thumbnailURL = generateURL(photo);
      const $img = $('<img>', {src: thumbnailURL});
      $img.appendTo('#images');
      const link = $('<a>', {href: thumbnailURL});
    });
  };
  //generate a URL from the API
  const generateURL = function(p){
    return [
     'http://farm',
     p.farm,
     '.static.flickr.com/',
     p.server,
     '/',
     p.id,
     '_',
     p.secret,
     '_q.jpg' // Change 'q' to something else for different sizes (see docs)
   ].join('');
  };
//when document is ready, show images on the screen via continuous scroll

$(document).ready(function(){
  $('#search').on('submit', function(event){
    event.preventDefault(); //disable the form being submitted to a server
    currentPage = 1;
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', function(){
    const scrollBottom =  $(document).height() - $(window).scrollTop() - $(window).height();
    if(scrollBottom < 500) {
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
    }
    currentPage++;
  });
});
