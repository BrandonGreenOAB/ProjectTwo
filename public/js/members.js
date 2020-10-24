$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
  console.log("hooked up");
  $(".languageBtn").on("click", function(event) {
    event.preventDefault();
    console.log("button clicked");
    // get the actual language from the data type
    const lang = $(this).data("language");
    console.log(lang);
    //hit the server with the language specified
    $.get("/api/members/" + lang).then((data) => {
      console.log(data);
      $("#results").empty();

      //build dynamic card with all the data and append each card to the correct div
      for (let i = 0; i < data.length; i++) {
        var div = $("<div class='card'>");
        var divC = $("<div class='card-content'>");
        var span = $("<span class='card-title'>");
        var pTag = $("<p>");
        var pTagTwo = $("<p>");
        var contact = $("<button class='contact'> contact </button>");
        var br = $("<br>");
        var del = $("<button class='del'> Finish Job </button>");
        var jobName = "Job: " + data[i].jobName;
        var price = "Price: $" + data[i].price;
        var language = "language: " + data[i].language;
        div.append(divC);
        divC.append(span);
        span.text(jobName);
        divC.append(pTag);
        divC.append(pTagTwo);
        divC.append(contact);
        divC.append(br);
        divC.append(del);
        pTag.text(price);
        pTagTwo.text(language);
        $("#results").append(div);
      }
    });
  });
});
