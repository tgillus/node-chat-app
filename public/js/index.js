var socket = io();

socket.on("connect", function() {
  console.log("Connected to server.");

  socket.emit("createMessage", {
    from: "Keon",
    text: "Hey! It's Keon."
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server.");
});

socket.on("newMessage", function(message) {
  console.log("Got new message.", message);
});
