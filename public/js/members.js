$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
  //ensure connection as a User
  console.log("hooked up");
  //When you click a button this function will read the language and append
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
        var del = $("<button class='del '> Finish Job </button>").attr(
          "id",
          data[i].id
        );
        var jobName = "Job: " + data[i].jobName;
        var price = "Price: $" + data[i].price;
        var language = "language: " + data[i].language;
        div.append(divC);
        divC.append(span);
        span.text(jobName);
        divC.append(pTag);
        divC.append(pTagTwo);
        divC.append(pTagThree);
        divC.append(contact);
        divC.append(br);
        divC.append(del);
        pTag.text(price);
        pTagTwo.text(language);
        $("#results").append(div);
      }
      // Destroy function that deletes the specific job from the Jobs table
      $(".del").on("click", function(event) {
        event.preventDefault();
        console.log("button clicked");
        console.log(this.id);
      });
    });
  });
});
