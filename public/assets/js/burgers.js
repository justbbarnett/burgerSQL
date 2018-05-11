// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  console.log("RUNNING THE BURGERS.JS FUNCTION!!!")

  //create burger orders!
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      orderUp: $("[name=order]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burgers.JS: Created new burger order", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    // reset the input value to blank
    $("#burg").val("");
  });

  //change order status to opposite of current true/false
  $(".change-order").on("click", function(event) {
    var id = $(this).data("id");
    var newOrder = $(this).data("neworder");
    console.log("burger id: " + id + "\n Order Status: " + newOrder)
    newOrder === true ? newOrder = false : newOrder = true

    var newOrderStatus = {
      orderUp: newOrder
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newOrderStatus
    }).then(
      function() {
        console.log("changed orderUp to: ", newOrderStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    
  });



  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log(" Burger Eaten!: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
