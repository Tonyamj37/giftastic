// JavaScript


// Event listener for Button 
$('#disneyChannel_button').on('click', function(){
// Use AJAX to call Giphy API
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=WFoT8C42krOktIHOPTIHCGwHHxGaebSZ&q=kim+possible", 
    method: "GET"
})
// Return data 
.then(function(response){
// Console log API response date
console.log(response);

});
// Use AJAX to call Giphy API
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=WFoT8C42krOktIHOPTIHCGwHHxGaebSZ&q=thats+so+raven", 
    method: "GET"
})
// Return data 
.then(function(response){
// Console log API response date
console.log(response);

});
// Use AJAX to call Giphy API
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=WFoT8C42krOktIHOPTIHCGwHHxGaebSZ&q=even+stevens",  
    method: "GET"
})
// Return data 
.then(function(response){
// Console log API response date
console.log(response);
});
// Use AJAX to call Giphy API
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=WFoT8C42krOktIHOPTIHCGwHHxGaebSZ&q=proud+family", 
    method: "GET"
})
// Return data 
.then(function(response){
// Console log API response date
console.log(response);

});
// Use AJAX to call Giphy API
$.ajax({
    url: queryURL, 
    method: "GET"
})
// Return data 
.then(function(response){
// Console log API response date
console.log(response);

});

// Saving the URL to JSON response
var imageUrl = response.data.image_original_url;
// Saving IMG tag to variable for later use
var kimPossibleImage = $("<img>");
var proudFamilyImage = $("<img>");
var thatsSoRavenImage = $("<img>");
var evenStevensImage = $("<img>");
var lizzieMcguire = $("<img>");
});

// Set a source equal to the url
kimPossibleImage.attr("src", imageUrl);
kimPossibleImage.attr("alt", "kim possible");
$("images").prepend(kimPossibleImage);

proudFamilyImage.attr("src", imageUrl);
proudFamilyImage.attr("alt", "proud family");
$("images").prepend(proudFamilyImage);

evenStevensImage.attr("src", imageUrl);
evenStevensImage.attr("alt", "even stevens");
$("images").prepend(evenStevensImage);









