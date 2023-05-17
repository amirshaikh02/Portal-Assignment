// var xhr = new XMLHttpRequest();
// var url = "https://restcountries.com/v3/name/india";

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       var response = JSON.parse(xhr.responseText);
//       var country = response[0];

//       console.log("Country name: " + country.name.common);
//       console.log("Currency: Indian Rupee (" + country.currencies.INR.name + ")");
//       console.log("Capital: " + country.capital);
//       console.log("Region: " + country.region);
//       console.log("Language: " + Object.values(country.languages).join(", "));
//       console.log("Population: " + country.population);
//       console.log("Country Flag image url: " + country.flags.png);
//     } else {
//       console.log("Error: " + xhr.status);
//     }
//   }
// };

// xhr.open("GET", url);
// xhr.send();

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Endpoint URL to fetch the details
var url = "https://restcountries.com/v3/name/india?fullText=true";

// Define the HTTP method and endpoint
xhr.open("GET", url, true);

// Set the response type to JSON
xhr.responseType = "json";

// Define a callback function to handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Response received successfully
    var response = xhr.response;

    // Extract the required details from the response
    var countryName = response[0].name.common;
    var currencyName = response[0].currencies.INR.name;
    var capital = response[0].capital[0];
    var region = response[0].region;
    var languages = Object.values(response[0].languages).join(", ");
    var population = response[0].population;
    var flagUrl = response[0].flags.png;

    // Print the details
    console.log("Country name:", countryName);
    console.log("Currency:", currencyName);
    console.log("Capital:", capital);
    console.log("Region:", region);
    console.log("Language:", languages);
    console.log("Population:", population);
    console.log("Country Flag image URL:", flagUrl);
  }
};

// Send the request
xhr.send();
