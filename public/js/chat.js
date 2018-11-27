var socket = io();

socket.on("connect", function() {
  console.log("Connected to server.");
});

socket.on("disconnect", function() {
  console.log("Disconnected from server.");
});

socket.on("newMessage", function(message) {
  var formattedTime = moment(message.createdAt).format("h:mm a");
  var template = jQuery("#message-template").html();
  var html = Mustache.render(template, {
    from: message.from,
    text: message.text,
    createdAt: formattedTime
  });

  jQuery("#messages").append(html);
});

socket.on("newLocationMessage", function(message) {
  var formattedTime = moment(message.createdAt).format("h:mm a");
  var template = jQuery("#location-message-template").html();
  var html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formattedTime
  });

  jQuery("#messages").append(html);
});

jQuery("#message-form").on("submit", function(event) {
  event.preventDefault();

  var messageTextBox = jQuery("[name=message]");

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: messageTextBox.val()
    },
    function() {
      messageTextBox.val("");
    }
  );
});

var locationButton = jQuery("#send-location");

locationButton.on("click", function() {
  if (!navigator.geolocation) {
    return alert("Geolocation not supported by your browser.");
  }

  locationButton.attr("disabled", "disabled").text("Sending Location . . .");

  navigator.geolocation.getCurrentPosition(function(position) {
    locationButton.removeAttr("disabled").text("Send Location");

    socket.emit("createLocationMessage", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    locationButton.removeAttr("disabled").text("Send Location");

    alert("Unable to fetch location.");
  });
});